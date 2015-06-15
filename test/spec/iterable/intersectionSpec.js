"use strict";

import { intersection } from "../../../src/iterable/intersection";

describe("intersection()", function () {
    it("should yield the intersection of two sorted iterators when first element of 'this' is lower than the first element of the argument", function () {
        [...[1,2,3,4,5]::intersection([2,3,4,6], function (b) {
            return this - b;
        })].should.deep.equal([2,3,4]);
    });

    it("should yield the intersection of two iterators when the first element of 'this' is higher than the first element of the argument", function () {
        [...[3,4,5,6,7]::intersection([2,3,4,6], function (b) {
            return this - b;
        })].should.deep.equal([3,4,6]);
    });
});
