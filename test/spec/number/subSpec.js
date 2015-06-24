import { sub } from "../../../src/number/sub";

describe("sub()", function () {
    it("should return the subtraction of the numbers", function () {
        (5)::sub(-5).should.equal(10);
        (-5)::sub(5).should.equal(-10);
        (5)::sub(5).should.equal(0);
    });
});
