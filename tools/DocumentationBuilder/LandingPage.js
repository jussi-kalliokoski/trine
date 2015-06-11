"use strict";

import { parse } from "marked";
import { trackingCode } from "./trackingCode";

export class LandingPage {
    constructor (readme) {
        this.source =
`<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Trine Documentation</title>
    <style>
body {
    font-family: sans-serif;
}
    </style>
    ${trackingCode}
</head>
<body>
    ${ parse(readme) }
</body>
</html>`;
    }
}
