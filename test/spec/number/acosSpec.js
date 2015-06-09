"use strict";

import { acos } from "../../../src/number/acos";

describe("acos()", function () {
    it("should return the inverse cosine of the number", function () {
        (+1.0)::acos().should.equal(Math.acos(+1.0));
        (+0.5)::acos().should.equal(Math.acos(+0.5));
        (+0.0)::acos().should.equal(Math.acos(+0.0));
        (-0.5)::acos().should.equal(Math.acos(-0.5));
        (-1.0)::acos().should.equal(Math.acos(-1.0));
    });
});
