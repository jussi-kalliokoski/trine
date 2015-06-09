"use strict";

import { takeWhile } from "../../../src/iterable/takeWhile";

describe("takeWhile()", function () {
    it("should yield all the items until the condition is not passed", function () {
        [...[1,2,3,4,5,1,2,3]::takeWhile(function () {
            return this < 4;
        })].should.deep.equal([1,2,3]);
    });
});
