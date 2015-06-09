"use strict";

import { aggregate } from "../../../src/iterable/aggregate";

function add (b) {
    return this + b;
}

describe("aggregate()", function () {
    describe("when given an empty iterator", function () {
        it("should yield the first accumulation", function () {
            [...[]::aggregate(add, 0)].should.deep.equal([0]);
        });
    });

    describe("when given a non-empty iterator", function () {
        it("should yield all the accumulations", function () {
            [...[1,2,3,4]::aggregate(add, 0)].should.deep.equal([0, 1, 3, 6, 10]);
        });
    });
});
