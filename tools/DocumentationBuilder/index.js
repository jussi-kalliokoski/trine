import path from "path";
import glob from "glob";
import { writeFileSync as write, readFileSync as read } from "fs";
import { sync as mkdir } from "mkdirp";
import { compare } from "semver";
import { map } from "../../src/iterable/map";
import { to } from "../../src/iterable/to";
import { sort } from "../../src/iterable/sort";

import { flatten } from "./flatten";
import { readDefinitions } from "./readDefinitions";
import { Documentation } from "./Documentation";
import { IndexFiles } from "./IndexFiles";
import { LandingPage } from "./LandingPage";
import pkg from "../../package.json";

function bySemver (b) {
    return compare(b, this);
}

async function buildDocs () {
     const modules = glob
        .sync(path.join("*", "*.js"), { cwd: "src" })
        ::map(function () {
            const category = this.split(path.sep)[0];
            const module = this.split(path.sep)[1].replace(/\.js$/, "");
            return {
                libraryName: pkg.name,
                filename: path.join("src", this),
                version: pkg.version,
                category: category,
                module: module,
                importTarget: pkg.name + "/" + category + "/" + module,
                source: read(path.join("src", this), "utf8"),
            };
        })
        ::map(readDefinitions)
        ::to(Array);

    const docs = new Documentation(modules);
    await docs.create();
    return docs;
}

export async function build () {
    const docDir = path.join("dist", "website", "docs");
    mkdir(docDir);
    mkdir(path.join(docDir, "latest"));

    const trineRequireSource =
`const tree = new Map();

${ glob.sync(path.join("*", "*.js"), { cwd: "src" }).map((path) => {
    return `tree.set("trine/${path.replace(/\.js$/, "")}", require("../src/${path}"));`;
}).join("\n") }

function splitModule (modulePath) {
    const split = modulePath.split(/\\./g);
    if ( split.length !== 3 ) { return modulePath; }
    return split.join("/");
}

export function trineRequire (modulePath) {
    if ( tree.has(modulePath) ) {
        return tree.get(modulePath);
    } else if ( tree.has(splitModule(modulePath)) ) {
        return tree.get(splitModule(modulePath));
    } else {
        throw new Error("Module not found:" + modulePath);
    }
};
`;

    write(path.join(".tmp", "trineRequire.js"), trineRequireSource, "utf8");

    const docs = await buildDocs();

    mkdir(path.join(docDir, "v" + pkg.version));
    write(path.join(docDir, "v" + pkg.version, "index.html"), docs.html, "utf8");
    write(path.join(docDir, "v" + pkg.version, "index.json"), docs.json, "utf8");

    const index = glob
        .sync("v*", { cwd: docDir })
        ::sort(bySemver)
        ::to(IndexFiles);

    write(path.join(docDir, "index.html"), index.source, "utf8");
    write(path.join(docDir, "latest", "index.html"), index.latestSource, "utf8");

    const landingPage = new LandingPage(read("README.md", "utf8"));

    write(path.join("dist", "website", "index.html"), landingPage.source, "utf8");
};
