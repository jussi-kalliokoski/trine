import { abs } from "../../../src/number/abs";

describe("abs()", function () {
    it("should return the absolute value of the number", function () {
        (-1)::abs().should.equal(1);
        (2)::abs().should.equal(2);
        (-3)::abs().should.equal(3);
        (0)::abs().should.equal(0);
    });
});
