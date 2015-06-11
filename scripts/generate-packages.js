#!/usr/bin/env babel-node

"use strict";

import { readFileSync as read, writeFileSync as write } from "fs";

const source = JSON.parse(read("package.json", "utf8"));

const main = {
    ...source,
    private: undefined,
    devDependencies: undefined,
    scripts: undefined,
};

write("dist/main/package.json", JSON.stringify(main), "utf8");
