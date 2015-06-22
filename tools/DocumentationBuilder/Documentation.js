"use strict";

import React from "react";
import { trackingCode } from "./trackingCode";
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
    <title>Trine v${version} Documentation</title>

    <link href='http://fonts.googleapis.com/css?family=Roboto:400,300,700,900' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/styles.css">

    ${trackingCode}
</head>
<body>
    <header class="header">
      <img src="images/trine-logo-dark-no-text@x2.png" class="header__train-logo">
      <span class="header__tag-line">
        <strong>trine</strong> Documentation
      </span>
      <a class="header__aside" href="https://github.com/jussi-kalliokoski/trine">Github</a>
    </header>

    <div class="container">
        ${React.renderToStaticMarkup(<Docs {...props} />)}
    </div>
</body>
</html>`;
    }
}
