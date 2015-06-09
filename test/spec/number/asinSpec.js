"use strict";

import { asin } from "../../../src/number/asin";

describe("asin()", function () {
    it("should return the arcsine of the number", function () {
        (+1.0)::asin().should.equal(Math.asin(+1.0));
        (+0.5)::asin().should.equal(Math.asin(+0.5));
        (+0.0)::asin().should.equal(Math.asin(+0.0));
        (-0.5)::asin().should.equal(Math.asin(-0.5));
        (-1.0)::asin().should.equal(Math.asin(-1.0));
    });
});
