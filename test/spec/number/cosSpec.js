"use strict";

import { cos } from "../../../src/number/cos";

describe("cos()", function () {
    it("should return the cosine of the number", function () {
        (+2.0 * Math.PI)::cos().should.equal(Math.cos(+2.0 * Math.PI));
        (+1.5 * Math.PI)::cos().should.equal(Math.cos(+1.5 * Math.PI));
        (+1.0 * Math.PI)::cos().should.equal(Math.cos(+1.0 * Math.PI));
        (+0.5 * Math.PI)::cos().should.equal(Math.cos(+0.5 * Math.PI));
        (+0.0 * Math.PI)::cos().should.equal(Math.cos(+0.0 * Math.PI));
        (-0.5 * Math.PI)::cos().should.equal(Math.cos(-0.5 * Math.PI));
        (-1.0 * Math.PI)::cos().should.equal(Math.cos(-1.0 * Math.PI));
        (-1.5 * Math.PI)::cos().should.equal(Math.cos(-1.5 * Math.PI));
        (-2.0 * Math.PI)::cos().should.equal(Math.cos(-2.0 * Math.PI));
    });
});
