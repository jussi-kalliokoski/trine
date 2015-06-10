start
    = docblock

docblock
    = docblock_start description:description instructions:instruction* docblock_end
    {
        var docblock = {
            type: "Docblock",
            start: offset(),
            end: offset() + text().length,
            description: description,
            thisParameter: null,
            examples: [],
            parameters: [],
            typeParameters: [],
            timeComplexity: null,
            spaceComplexity: null,
            unknownInstructions: [],
        };

        instructions.forEach(function (instruction) {
            switch ( instruction.type ) {
            case "ExampleInstruction":
                docblock.examples.push(instruction);
                break;
            case "TypeInstruction":
                if ( docblock.typeParameters.some(function (parameter) {
                    return parameter.name.name === instruction.name.name;
                }) ) {
                    var error = new Error("Duplicate @type `" + instruction.name.name + "`");
                    error.offset = instruction.start;
                    throw error;
                }

                docblock.typeParameters.push(instruction);
                break;
            case "ParamInstruction":
                if ( docblock.parameters.some(function (parameter) {
                    return parameter.name.name === instruction.name.name;
                }) ) {
                    var error = new Error("Duplicate @param `" + instruction.name.name + "`");
                    error.offset = instruction.start;
                    throw error;
                }

                docblock.parameters.push(instruction);
                break;
            case "ThisInstruction":
                if ( docblock.thisParameter ) {
                    var error = new Error("Duplicate @this instruction");
                    error.offset = instruction.start;
                    throw error;
                }

                docblock.thisParameter = instruction;
                break;
            case "NtimeInstruction":
                if ( docblock.timeComplexity ) {
                    var error = new Error("Duplicate @ntime instruction");
                    error.offset = instruction.start;
                    throw error;
                }

                docblock.timeComplexity = instruction;
                break;
            case "DspaceInstruction":
                if ( docblock.spaceComplexity ) {
                    var error = new Error("Duplicate @dspace instruction");
                    error.offset = instruction.start;
                    throw error;
                }

                docblock.spaceComplexity = instruction;
                break;
            case "UnknownInstruction":
                docblock.unknownInstructions.push(instruction);
                break;
            }
        });

        return docblock;
    }

docblock_start
    = "/**\n"

docblock_end
    = "*/"

description
    = markdown_block

markdown_block
    = lines:markdown_line+
    { return {
        type: "MarkdownBlock",
        start: offset(),
        end: offset() + text().length,
        content: lines.join("\n").replace(/\n+/g, function (linebreaks) {
            if ( linebreaks.length === 1 ) { return " "; }
            return linebreaks;
        }).trim(),
    } }

markdown_line
    = filled_markdown_line
    / empty_line

filled_markdown_line
    = !instruction !code_block leading_star content:$([^\n]*) "\n"
    { return content }

instruction
    = example_instruction
    / type_instruction
    / this_instruction
    / param_instruction
    / dspace_instruction
    / ntime_instruction
    / unknown_instruction

example_instruction
    = leading_star "@example" " " title:$([^\n]+) "\n" content:example_content+
    { return {
        type: "ExampleInstruction",
        start: offset(),
        end: offset() + text().length,
        title: title,
        content: content.filter(function (block) {
            return block.type !== "MarkdownBlock" || block.content !== "";
        }),
    } }

example_content
    = code_block
    / markdown_block

type_instruction
    = leading_star "@type" " " name:identifier description:instruction_description
    { return {
        type: "TypeInstruction",
        start: offset(),
        end: offset() + text().length,
        name: name,
        description: description,
    } }

this_instruction
    = leading_star "@this" typeAnnotation:(
        " " t:type_annotation
        { return t }
    )? description:instruction_description
    { return {
        type: "ThisInstruction",
        start: offset(),
        end: offset() + text().length,
        typeAnnotation: typeAnnotation,
        description: description,
    } }

param_instruction
    = leading_star "@param" " " name:identifier description:instruction_description
    { return {
        type: "ParamInstruction",
        start: offset(),
        end: offset() + text().length,
        name: name,
        description: description,
    } }

dspace_instruction
    = leading_star "@dspace" " " value:$([^\n]+) "\n"
    { return {
        type: "DspaceInstruction",
        start: offset(),
        end: offset() + text().length,
        value: value,
    } }

ntime_instruction
    = leading_star "@ntime" " " value:$([^\n]+) "\n"
    { return {
        type: "NtimeInstruction",
        start: offset(),
        end: offset() + text().length,
        value: value,
    } }

unknown_instruction
    = leading_star "@" name:identifier content:instruction_description
    { return {
        type: "UnknownInstruction",
        start: offset(),
        end: offset() + text().length,
        name: name,
        content: content,
    } }

instruction_description
    = md:(" " md:markdown_one_liner { return md }) / "\n"
    { return (typeof md === "undefined" ? "" : md).trim() }

type_annotation "TypeAnnotation"
    = "{" " "* type:$([^\}]+) " "* "}"
    { return {
        type: "TypeAnnotation",
        start: offset(),
        end: offset() + text().length,
        value: type,
    } }

leading_star
    = " "+ "* "

empty_line
    = " "+ "*\n"
    { return ""; }

markdown_one_liner
    = first:$([^\n]+) "\n" rest:filled_markdown_line*
    {
        return [first].concat(rest).join(" ").replace(/\s+/g, " ");
    }

identifier "Identifier"
    = name:$([a-zA-Z_] [a-zA-Z_0-9]*)
    { return {
        type: "Identifier",
        start: offset(),
        end: offset() + text().length,
        name: name,
    } }

code_block "CodeBlock"
    = leading_star "```" lang:identifier? "\n" code:code code_block_end
    { return {
        type: "CodeBlock",
        start: offset(),
        end: offset() + text().length,
        lang: lang,
        code: code,
    } }

code
    = lines:code_line*
    { return lines.join("\n") }

code_line
    = empty_line
    / filled_code_line

filled_code_line
    = !code_block_end leading_star content:$([^\n]+) "\n"
    { return content; }

code_block_end "EndOfCodeBlock"
    = leading_star "```" "\n"
