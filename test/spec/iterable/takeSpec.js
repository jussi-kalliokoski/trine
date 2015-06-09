"use strict";

import { take } from "../../../src/iterable/take";

describe("take()", function () {
    it("should yield the items that pass the condition", function () {
        [...[1,2,3,4,5]::take(function () {
            return this % 2 === 0;
        })].should.deep.equal([2,4]);
    });
});
