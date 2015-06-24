import { not } from "../../../src/boolean/not";

describe("not()", function () {
    describe("with true", function () {
        it("should return false", function () {
            true::not().should.equal(false);
        });
    });

    describe("with false", function () {
        it("should return true", function () {
            false::not().should.equal(true);
        });
    });
});
