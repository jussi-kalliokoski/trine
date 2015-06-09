"use strict";

import { difference } from "../../../src/iterable/difference";

describe("difference()", function () {
    it("should yield the differences of two sorted iterators", function () {
        [...[1,2,4]::difference([2,3,4,5], function (b) {
            return this - b;
        })].should.deep.equal([1,3,5]);
    });
});
