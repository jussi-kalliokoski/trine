import { or } from "../../../src/boolean/or";

describe("or()", function () {
    describe("with true and true", function () {
        it("should return true", function () {
            true::or(true).should.equal(true);
        });
    });

    describe("with true and false", function () {
        it("should return true", function () {
            true::or(false).should.equal(true);
        });
    });

    describe("with false and true", function () {
        it("should return true", function () {
            false::or(true).should.equal(true);
        });
    });

    describe("with false and false", function () {
        it("should return false", function () {
            false::or(false).should.equal(false);
        });
    });
});
