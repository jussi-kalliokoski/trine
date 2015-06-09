"use strict";

import { find } from "../../../src/iterable/find";

describe("find()", function () {
    it("should yield only the first item that matches the condition", function () {
        [...[1,3,5,7,8,9,11,12,13,14]::find(function () {
            return this % 2 === 0;
        })].should.deep.equal([8]);
    });
});
