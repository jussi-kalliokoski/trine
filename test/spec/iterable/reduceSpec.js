"use strict";

import { reduce } from "../../../src/iterable/reduce";

describe("reduce()", function () {
    describe("if the iterator is empty", function () {
        it("should yield the initial accumulation", function () {
            [...[]::reduce(function (b) {
                return this + b;
            }, 0)].should.deep.equal([0]);
        });
    });

    describe("if the iterator is not empty", function () {
        it("should yield the last accumulation", function () {
            [...[1,2,3,4]::reduce(function (b) {
                return this + b;
            }, 0)].should.deep.equal([10]);
        });
    });
});
