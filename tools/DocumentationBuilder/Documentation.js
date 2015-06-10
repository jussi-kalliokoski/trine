"use strict";

import React from "react";
import { Docs } from "./components/Docs";
import { map } from "../../src/iterable/map";
import { to } from "../../src/iterable/to";

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
        const version = modules[0].version;
        const name = modules[0].libraryName;
        const categories = modules
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
</head>
<body>
    ${React.renderToStaticMarkup(<Docs {...props} />)}
</body>
</html>`;
    }
}
