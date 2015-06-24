import { sin } from "../../../src/number/sin";

describe("sin()", function () {
    it("should return the sine of the number", function () {
        (+2.0 * Math.PI)::sin().should.equal(Math.sin(+2.0 * Math.PI));
        (+1.5 * Math.PI)::sin().should.equal(Math.sin(+1.5 * Math.PI));
        (+1.0 * Math.PI)::sin().should.equal(Math.sin(+1.0 * Math.PI));
        (+0.5 * Math.PI)::sin().should.equal(Math.sin(+0.5 * Math.PI));
        (+0.0 * Math.PI)::sin().should.equal(Math.sin(+0.0 * Math.PI));
        (-0.5 * Math.PI)::sin().should.equal(Math.sin(-0.5 * Math.PI));
        (-1.0 * Math.PI)::sin().should.equal(Math.sin(-1.0 * Math.PI));
        (-1.5 * Math.PI)::sin().should.equal(Math.sin(-1.5 * Math.PI));
        (-2.0 * Math.PI)::sin().should.equal(Math.sin(-2.0 * Math.PI));
    });
});
