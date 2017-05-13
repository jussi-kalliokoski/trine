import { identity } from "../../../src/boolean/identity";

describe("identity()", function () {
    describe("with true", function () {
        it("should return true", function () {
            true::identity().should.equal(true);
        });
    });

    describe("with false", function () {
        it("should return false", function () {
            false::identity().should.equal(false);
        });
    });
});
