import { sign } from "../../../src/number/sign";

describe("sign()", function () {
    it("should return the sign of the number", function () {
        (-1)::sign().should.equal(-1);
        (2)::sign().should.equal(1);
        (-3)::sign().should.equal(-1);
        (0)::sign().should.equal(0);
    });
});
