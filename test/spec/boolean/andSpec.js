"use strict";

import { and } from "../../../src/boolean/and";

describe("and()", function () {
    describe("with true and true", function () {
        it("should return true", function () {
            true::and(true).should.equal(true);
        });
    });

    describe("with true and false", function () {
        it("should return false", function () {
            true::and(false).should.equal(false);
        });
    });

    describe("with false and true", function () {
        it("should return false", function () {
            false::and(true).should.equal(false);
        });
    });

    describe("with false and false", function () {
        it("should return false", function () {
            false::and(false).should.equal(false);
        });
    });
});
