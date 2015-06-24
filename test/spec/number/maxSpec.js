import { max } from "../../../src/number/max";

describe("max()", function () {
    it("should return the greater of the numbers", function () {
        (2)::max(6).should.equal(6);
        (7)::max(3).should.equal(7);
        (-4)::max(-2).should.equal(-2);
        (-3)::max(-5).should.equal(-3);
    });
});
