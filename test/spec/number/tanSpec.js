"use strict";

import { tan } from "../../../src/number/tan";

describe("tan()", function () {
    it("should return the tangent of the number", function () {
        (+2.0 * Math.PI)::tan().should.equal(Math.tan(+2.0 * Math.PI));
        (+1.5 * Math.PI)::tan().should.equal(Math.tan(+1.5 * Math.PI));
        (+1.0 * Math.PI)::tan().should.equal(Math.tan(+1.0 * Math.PI));
        (+0.5 * Math.PI)::tan().should.equal(Math.tan(+0.5 * Math.PI));
        (+0.0 * Math.PI)::tan().should.equal(Math.tan(+0.0 * Math.PI));
        (-0.5 * Math.PI)::tan().should.equal(Math.tan(-0.5 * Math.PI));
        (-1.0 * Math.PI)::tan().should.equal(Math.tan(-1.0 * Math.PI));
        (-1.5 * Math.PI)::tan().should.equal(Math.tan(-1.5 * Math.PI));
        (-2.0 * Math.PI)::tan().should.equal(Math.tan(-2.0 * Math.PI));
    });
});
