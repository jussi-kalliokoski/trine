"use strict";

export class IndexFiles {
    constructor (versions) {
        const latest = versions[0];

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
</head>
<body>
    <h1>Trine Documentation</h1>
    <ul>
${ versions.map((v) => {
    if ( v === latest ) {
        return `        <li><a href="${v}">${v} (latest)</a></li>\n`;
    }

    return `        <li><a href="${v}">${v}</a></li>\n`;
}) }    </ul>
</body>
</html>`;

        this.latestSource =
`<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Trine Documentation (latest)</title>
    <meta http-equiv="refresh" content="0; url=../${latest}">
    <style>
body {
    font-family: sans-serif;
}
    </style>
</head>
<body>
    <h1>Trine Documentation</h1>
    <p>
        Redirecting, please wait...
    </p>
</body>
</html>`;
    }
}
