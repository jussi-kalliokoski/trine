"use strict";

import { union } from "../../../src/iterable/union";

describe("union()", function () {
    it("should yield the union of two sorted iterators", function () {
        [...[2,3,4,7,8,9]::union([1,5,6,7], function (b) {
            return this - b;
        })].should.deep.equal([1,2,3,4,5,6,7,8,9]);
    });
});
