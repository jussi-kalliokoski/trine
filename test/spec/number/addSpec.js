"use strict";

import { add } from "../../../src/number/add";

describe("add()", function () {
    it("should return the sum of the numbers", function () {
        (5)::add(-5).should.equal(0);
        (-5)::add(5).should.equal(0);
        (5)::add(5).should.equal(10);
    });
});
