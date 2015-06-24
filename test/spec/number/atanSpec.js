import { atan } from "../../../src/number/atan";

describe("atan()", function () {
    it("should return the arctangent of the number", function () {
        (+1.0)::atan().should.equal(Math.atan(+1.0));
        (+0.5)::atan().should.equal(Math.atan(+0.5));
        (+0.0)::atan().should.equal(Math.atan(+0.0));
        (-0.5)::atan().should.equal(Math.atan(-0.5));
        (-1.0)::atan().should.equal(Math.atan(-1.0));
    });
});
