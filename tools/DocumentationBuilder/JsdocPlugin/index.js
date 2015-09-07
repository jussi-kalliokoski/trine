import "pegjs-require";
import { traverse } from "babel";
import { parse } from "./parser";

function getDebugString (source, filename, offset) {
    const lines = source.substr(0, offset).split("\n");
    const lastLine = lines[lines.length - 1];
    const line = lines.length;
    const column = lastLine.length + 1;
    return `${filename}:${line}:${column}`;
}

function offsetPositions (ast, offset) {
    Object.keys(ast).forEach(function (key) {
        if ( !ast[key] ) { return; }

        if ( Array.isArray(ast[key]) ) {
            ast[key].forEach(function (node) {
                offsetPositions(node, offset);
            });
        } else if ( typeof ast[key] === "object" ) {
            offsetPositions(ast[key], offset);
        }
    });

    if ( typeof ast.start === "number" && typeof ast.end === "number" ) {
        ast.start += offset;
        ast.end += offset;
    }
}

function findDocblock (node, source, filename) {
    const sourceBeforeDeclaration = source.substr(0, node.start);
    const docblockEnd = sourceBeforeDeclaration.lastIndexOf("*/");

    if ( docblockEnd === -1 || sourceBeforeDeclaration.substr(docblockEnd + 2).trim() ) { return null; }

    const docblockStart = sourceBeforeDeclaration.lastIndexOf("/**\n", docblockEnd);

    try {
        const docblock = parse(source.slice(docblockStart, docblockEnd + 2));
        offsetPositions(docblock, docblockStart);
        return docblock;
    } catch ( error ) {
        throw new Error(error.message + " " + getDebugString(source, filename, docblockStart + error.location));
    }
}

function assignParameterDescriptions (parameters, docparams, source, filename) {
    const documentedParameters = docparams.slice();

    function findDocumentedParameter (name) {
        for ( var i = 0; i < documentedParameters.length; i++ ) {
            if ( documentedParameters[i].name.name === name ) {
                return documentedParameters.splice(i, 1)[0];
            }
        }

        return null;
    }

    parameters.forEach(function (parameter) {
        if ( parameter.type === "Identifier" ) {
            const docs = findDocumentedParameter(parameter.name);
            parameter.description = docs && docs.description;
        } else if ( parameter.type === "RestElement" ) {
            const docs = findDocumentedParameter(parameter.argument.name);
            parameter.description = docs && docs.description;
        }
    });

    documentedParameters.forEach(function (parameter) {
        throw new Error("Non-existing parameter `" + parameter.name.name + "` documented at " + getDebugString(source, filename, parameter.start));
    });
}

export function augment (ast, source, filename) {
    traverse(ast, {
        noScope: true,
        ExportNamedDeclaration (node, parent) {
            if ( node.declaration && node.declaration.type === "FunctionDeclaration" ) {
                const docblock = findDocblock(node, source, filename);
                if ( !docblock ) { return; }
                node.declaration.description = docblock.description;
                node.declaration.thisParameter = docblock.thisParameter;
                node.declaration.examples = docblock.examples;
                node.declaration.timeComplexity = docblock.timeComplexity;
                node.declaration.spaceComplexity = docblock.spaceComplexity;
                assignParameterDescriptions(node.declaration.params, docblock.parameters, source, filename);
                if ( node.declaration.typeParameters ) {
                    assignParameterDescriptions(node.declaration.typeParameters.params, docblock.typeParameters, source, filename);
                }
            }
        },
    });
};
