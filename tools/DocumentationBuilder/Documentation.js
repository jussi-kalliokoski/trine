"use strict";

import React from "react";
import { trackingCode } from "./trackingCode";
import { Docs } from "./components/Docs";
import { map } from "../../src/iterable/map";
import { to } from "../../src/iterable/to";
import MemoryFileSystem from "memory-fs";
import webpack from "webpack";
import { join, resolve } from "path";
import autoprefixer from "autoprefixer-core";
import simpleVars from "postcss-simple-vars";
import nested from "postcss-nested";

function groupBy (key) {
    const map = new Map();

    for ( const item of this ) {
        const group = item[key];
        if ( map.has(group) ) {
            map.get(group).push(item);
        } else {
            map.set(group, [item]);
        }
    }

    return map;
}

export class Documentation {
    constructor (modules) {
        this.modules = modules;
    }

    create () {
        return new Promise((resolvePromise, rejectPromise) => {
            const fs = new MemoryFileSystem();
            const compiler = webpack({
                entry: [join(__dirname, "app", "index.js")],

                output: {
                    filename: "docs.js",
                    path: join(__dirname, "..", "..", "dist", "website", "assets", "static"),
                },

                resolve: {
                    extensions: ["", ".js", ".jsx", ".json"],
                },

                module: {
                    loaders: [{
                        loader: "babel-loader",
                        test: /\.jsx?$/,
                        include: [
                            __dirname,
                            resolve(join(__dirname, "..", "..", "src")),
                            resolve(join(__dirname, "..", "..", ".tmp")),
                        ],
                    }, {
                        loader: "style-loader!css-loader!postcss-loader?pack=docs",
                        test: /\.css$/,
                    }, {
                        loader: "json-loader",
                        test: /\.json$/,
                    }],
                },

                postcss: {
                    docs: [simpleVars, nested, autoprefixer],
                },
            }, function (error, stats) {
                if ( error ) { return rejectPromise(error); }
                console.error(stats.toString());
                resolvePromise();
            });

            compiler.outputFileSystem = fs;

            compiler.plugin("after-emit", (compilation, callback) => {
                const outname = Object.keys(compilation.assets)[0];
                this.js = fs.readFileSync(fs.join(compiler.outputPath, outname)).toString("utf8");
                callback();
            });
        }).then(() => this.build());
    }

    build () {
        const version = this.modules[0].version;
        const name = this.modules[0].libraryName;
        const categories = this.modules
            ::groupBy("category")
            .entries()
            ::map(function () {
                return {
                    name: this[0],
                    modules: this[1],
                };
            })
            ::to(Array);
        const props = { name, version, categories };
        this.json = JSON.stringify(props);
        this.html =
`<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Trine v${version} Documentation</title>
    <style>
body {
    font-family: sans-serif;
}
    </style>
    ${trackingCode}
</head>
<body>
    <div id="container">${React.renderToString(<Docs {...props} />)}</div>
    <script type="x-application/bundled-json" id="props">${this.json}</script>
    <script src="https://babeljs.io/scripts/babel.js" async></script>
    <script>${this.js}</script>
</body>
</html>`;
    }
}
