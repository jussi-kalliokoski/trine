"use strict";

import { intersection } from "../../../src/iterable/intersection";

describe("intersection()", function () {
    it("should yield the intersection of two sorted iterators", function () {
        [...[1,2,3,4,5]::intersection([2,3,4,6], function (b) {
            return this - b;
        })].should.deep.equal([2,3,4]);
    });
});
