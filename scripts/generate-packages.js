#!/usr/bin/env babel-node

import { readFileSync as read, writeFileSync as write } from "fs";
import { sync as glob } from "glob";
import { sync as mkdir } from "mkdirp";
import { join, resolve } from "path";
import { Plugin, types as t, transformFileSync as transform } from "babel";

const source = JSON.parse(read("package.json", "utf8"));

const main = {
    ...source,
    private: undefined,
    devDependencies: undefined,
    scripts: undefined,
};

write("dist/main/package.json", JSON.stringify(main), "utf8");

function getModuleSpecifierByName (filename) {
    return filename
        .replace(/\.js$/, "")
        .split("/");
}

glob("*/*.js", { cwd: "src" }).map((mod) => {
    const [category, name] = getModuleSpecifierByName(mod);
    const dependencies = {};

    const transformed = transform(join("src", mod), {
        plugins: [new Plugin("fix-imports", {
            visitor: {
                ImportDeclaration (node, parent) {
                    const importSource = node.source.value;

                    if ( importSource[0] !== "." ) { return; }

                    if ( importSource[1] === "." ) {
                        const [category, name] = getModuleSpecifierByName(importSource.substr(3));
                        dependencies[`${source.name}.${category}.${name}`] = source.version;
                        node.source = t.Literal(`${source.name}.${category}.${name}`);
                    } else {
                        const name = importSource.substr(2);
                        dependencies[`${source.name}.${category}.${name}`] = source.version;
                        node.source = t.Literal(`${source.name}.${category}.${name}`);
                    }
                },
            },
        })],
    });

    const pkg = {
        ...main,
        name: `${source.name}.${category}.${name}`,
        index: "index.js",
        files: ["index.js", "index.js.map"],
        dependencies: {
            ...source.dependencies,
            ...dependencies,
        },
    };

    const dir = join("dist", "split", `${category}.${name}`);
    mkdir(dir);
    write(join(dir, "package.json"), JSON.stringify(pkg), "utf8");
    write(join(dir, "index.js"), transformed.code, "utf8");
});
