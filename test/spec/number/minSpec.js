"use strict";

import { min } from "../../../src/number/min";

describe("min()", function () {
    it("should return the smaller of the numbers", function () {
        (2)::min(6).should.equal(2);
        (7)::min(3).should.equal(3);
        (-4)::min(-2).should.equal(-4);
        (-3)::min(-5).should.equal(-5);
    });
});
