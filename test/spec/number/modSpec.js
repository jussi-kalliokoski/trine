"use strict";

import { mod } from "../../../src/number/mod";

describe("mod()", function () {
    it("should return the division remainder of the numbers", function () {
        (5)::mod(3).should.equal(2);
        (8)::mod(4).should.equal(0);
        (-4)::mod(3).should.equal(-1);
    });
});
