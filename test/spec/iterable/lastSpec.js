"use strict";

import { last } from "../../../src/iterable/last";

describe("last()", function () {
    it("should only return the N-th item from the end of the iterator", function () {
        [...[1,2,3]::last(0)].length.should.equal(1);
        [...[1,2,3]::last(0)][0].should.equal(3);
    });
});
