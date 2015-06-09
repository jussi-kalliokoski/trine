"use strict";

import { pow } from "../../../src/number/pow";

describe("pow()", function () {
    it("should return the n-th power of the number", function () {
        (2)::pow(0).should.equal(1);
        (3)::pow(1).should.equal(3);
        (4)::pow(0.5).should.equal(2);
        (5)::pow(2).should.equal(25);
        (6)::pow(3).should.equal(216);
    });
});
