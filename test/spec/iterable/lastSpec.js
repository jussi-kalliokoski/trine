"use strict";

import { last } from "../../../src/iterable/last";

describe("last()", function () {
    it("should only yield the N-th item from the end of the iterator", function () {
        [...[1,2,3]::last(0)].should.deep.equal([3]);
        [...[1,2,3]::last(1)].should.deep.equal([2]);
        [...[1,2,3]::last(2)].should.deep.equal([1]);
    });

    it("should not yield anything if there is no item at that index", function () {
        [...[1,2,3]::last(3)].should.deep.equal([]);
    });
});
