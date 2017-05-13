import { nor } from "../../../src/boolean/nor";

describe("nor()", function () {
    describe("with true and true", function () {
        it("should return false", function () {
            true::nor(true).should.equal(false);
        });
    });

    describe("with true and false", function () {
        it("should return false", function () {
            true::nor(false).should.equal(false);
        });
    });

    describe("with false and true", function () {
        it("should return false", function () {
            false::nor(true).should.equal(false);
        });
    });

    describe("with false and false", function () {
        it("should return true", function () {
            false::nor(false).should.equal(true);
        });
    });
});
