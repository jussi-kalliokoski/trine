"use strict";

import { parse, traverse } from "babel";
import { augment } from "./JsdocPlugin";
import { parse as parseMarkdown } from "marked";

function getDebugString (source, filename, offset) {
    const lines = source.substr(0, offset).split("\n");
    const lastLine = lines[lines.length - 1];
    const line = lines.length;
    const column = lastLine.length + 1;
    return `${filename}:${line}:${column}`;
}

function md (string) {
    return parseMarkdown(string).trim();
}

function mdOneliner (string) {
    if ( !string ) { return ""; }
    return md(string).slice(3).slice(0, -4);
}

export function readDefinitions () {
    const exports = [];
    const { source, filename } = this;
    const ast = parse(source, { sourceFile: filename });
    augment(ast, source, filename);
    traverse(ast, {
        noScope: true,
        ExportNamedDeclaration (node, parent) {
            if ( node.declaration && node.declaration.type === "FunctionDeclaration" ) {
                const name = node.declaration.id.name;

                if ( !node.declaration.description ) {
                    throw new Error("Missing jsdoc for function `" + name + "` at " + getDebugString(source, filename, node.declaration.start));
                }

                if ( !node.declaration.thisParameter ) {
                    throw new Error("Missing documentation for `this` parameter for function `" + name + "` at " + getDebugString(source, filename, node.declaration.start));
                }

                if ( !node.declaration.thisParameter.typeAnnotation ) {
                    throw new Error("Missing type annotation for `this` parameter for function `" + name + "` at " + getDebugString(source, filename, node.declaration.thisParameter.start));
                }

                if ( !node.declaration.returnType ) {
                    throw new Error("Missing return type annotation for function `" + name + "` at " + getDebugString(source, filename, node.declaration.start));
                }

                exports.push({
                    type: "Function",
                    name: name,
                    description: md(node.declaration.description.content),
                    thisParameter: node.declaration.thisParameter && {
                        type: node.declaration.thisParameter.typeAnnotation.value,
                        description: mdOneliner(node.declaration.thisParameter.description),
                    },
                    parameters: node.declaration.params.map(function (param) {
                        if ( param.type === "Identifier" ) {
                            if ( !param.typeAnnotation ) {
                                throw new Error("Missing type annotation for parameter `" + param.name + "` at " + getDebugString(source, filename, param.start));
                            }

                            return {
                                name: param.name,
                                type: source.slice(param.typeAnnotation.typeAnnotation.start, param.typeAnnotation.typeAnnotation.end),
                                description: mdOneliner(param.description),
                                rest: false,
                            };
                        } else if ( param.type === "RestElement" ) {
                            if ( !param.typeAnnotation ) {
                                throw new Error("Missing type annotation for parameter `" + param.argument.name + "` at " + getDebugString(source, filename, param.argument.start));
                            }

                            return {
                                name: param.argument.name,
                                type: source.slice(param.typeAnnotation.typeAnnotation.start, param.typeAnnotation.typeAnnotation.end),
                                description: mdOneliner(param.description),
                                rest: true,
                            };
                        }
                    }),
                    typeParameters: !node.declaration.typeParameters ? [] : node.declaration.typeParameters.params.map(function (param) {
                        return {
                            name: param.name,
                            description: mdOneliner(param.description),
                        };
                    }),
                    returns: {
                        type: source.slice(node.declaration.returnType.typeAnnotation.start, node.declaration.returnType.typeAnnotation.end),
                    },
                    examples: node.declaration.examples.map(function (example) {
                        return {
                            title: mdOneliner(example.title),
                            content: example.content.map(function (block) {
                                if ( block.type === "CodeBlock" ) {
                                    return {
                                        type: "code",
                                        language: block.lang ? block.lang.name : "",
                                        content: block.code,
                                    };
                                } else {
                                    return {
                                        type: "html",
                                        language: "",
                                        content: md(block.content),
                                    };
                                }
                            }),
                        };
                    }),
                });
            }
        },
    });

    if ( !exports.length ) {
        throw new Error("Module `" + filename + "` has no exports");
    }

    return {
        ...this,
        exports,
    };
};
