#!/usr/bin/env babel-node

import { build } from "../tools/DocumentationBuilder";

build().catch(function (error) {
    setImmediate(function () {
        throw error;
    });
});
