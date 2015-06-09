"use strict";

require("source-map-support").install();

var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");

chai.use(sinonChai);
chai.should();

void function (global) {
    global.sinon = sinon;
    global.chai = chai;
    global.expect = chai.expect;
}(typeof window === "undefined" ? global : window);
