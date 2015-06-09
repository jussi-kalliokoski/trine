"use strict";

import { head } from "../../../src/iterable/head";

describe("intersection", function () {
    it("should return the N first items of the iterator", function () {
        [...[1,2,3,4,5]::head(3)].should.deep.equal([1,2,3]);
    });
});
