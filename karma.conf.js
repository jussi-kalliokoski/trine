"use strict";

var path = require("path");
var useBrowserStack = process.env.BROWSERSTACK_KEY && process.env.TRAVIS_SECURE_ENV_VARS === "true";

module.exports = function (config) {
    config.set({
        basePath: ".",
        frameworks: ["mocha", "sinon-chai"],
        reporters: ["mocha", "coverage"],
        browserNoActivityTimeout: 30000,

        files: [
            "test/_karmaInit.js",
        ],

        preprocessors: {
            "test/_karmaInit.js": ["webpack"],
        },

        webpack: {
            module: {
                loaders: [{
                    loader: "babel-loader",
                    include: [
                        path.join(__dirname, "src"),
                        path.join(__dirname, "test"),
                    ],
                }, {
                    loader: "isparta-loader",
                    include: [
                        path.join(__dirname, "src"),
                    ],
                }],
            },
        },

        coverageReporter: {
            type: "lcov",
            dir: ".tmp/coverage/",
            instrumenterOptions: {
                isparta: { noCompact: true },
            },
        },

        browserStack: {
            username: process.env.BROWSERSTACK_USER,
            accessKey: process.env.BROWSERSTACK_KEY,
        },

        customLaunchers: require("./tools/customLaunchers.json"),

        browsers: useBrowserStack ? [
            "bs_firefox_mac",
            "bs_opera_mac",
            "bs_chrome_mac",
            "bs_safari_mac",
            "bs_ie_10",
            "bs_ie_11",
        ] : ["PhantomJS"],
    });
};
