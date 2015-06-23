#!/usr/bin/env babel-node

"use strict";

import { build } from "../tools/DocumentationBuilder";

build().catch(function (error) {
    setImmediate(function () {
        throw error;
    });
});
