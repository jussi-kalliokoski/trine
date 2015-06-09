"use strict";

import { xor } from "../../../src/boolean/xor";

describe("xor()", function () {
    describe("with true and true", function () {
        it("should return true", function () {
            true::xor(true).should.equal(false);
        });
    });

    describe("with true and false", function () {
        it("should return false", function () {
            true::xor(false).should.equal(true);
        });
    });

    describe("with false and true", function () {
        it("should return false", function () {
            false::xor(true).should.equal(true);
        });
    });

    describe("with false and false", function () {
        it("should return false", function () {
            false::xor(false).should.equal(false);
        });
    });
});
