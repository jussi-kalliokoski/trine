"use strict";

import { count } from "../../../src/iterable/count";

describe("count()", function () {
    it("should yield the size of the iterator", function () {
        [...[1,2,3]::count()].should.deep.equal([3]);
        [...[1,2,3,2]::count()].should.deep.equal([4]);
    });
});
