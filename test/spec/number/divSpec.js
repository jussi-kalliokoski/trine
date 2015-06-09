"use strict";

import { div } from "../../../src/number/div";

describe("div()", function () {
    it("should return the division of the numbers", function () {
        (5)::div(-5).should.equal(-1);
        (8)::div(2).should.equal(4);
        (-4)::div(2).should.equal(-2);
    });
});
