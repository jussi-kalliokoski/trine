"use strict";

import { mul } from "../../../src/number/mul";

describe("mul()", function () {
    it("should return the multiplication of the numbers", function () {
        (5)::mul(3).should.equal(15);
        (8)::mul(4).should.equal(32);
        (-4)::mul(3).should.equal(-12);
        (4)::mul(-6).should.equal(-24);
    });
});
