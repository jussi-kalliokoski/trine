import { nand } from "../../../src/boolean/nand";

describe("nand()", function () {
    describe("with true and true", function () {
        it("should return false", function () {
            true::nand(true).should.equal(false);
        });
    });

    describe("with true and false", function () {
        it("should return true", function () {
            true::nand(false).should.equal(true);
        });
    });

    describe("with false and true", function () {
        it("should return true", function () {
            false::nand(true).should.equal(true);
        });
    });

    describe("with false and false", function () {
        it("should return true", function () {
            false::nand(false).should.equal(true);
        });
    });
});
