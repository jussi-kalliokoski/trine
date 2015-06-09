"use strict";

import { uniq } from "../../../src/iterable/uniq";

describe("uniq()", function () {
    it("should yield the items that don't match the previous item based on comparator", function () {
        [...[1,1,2,3,4,4,5,6,7,7,8,8,8,8,8,9]::uniq(function (b) {
            return this === b;
        })].should.deep.equal([1,2,3,4,5,6,7,8,9]);
    });

    describe("when the iterator is empty", function () {
        it("should yield nothing", function () {
            [...[]::uniq(function (b) {
                return this === b;
            })].should.deep.equal([]);
        });
    });
});
