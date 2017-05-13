import { xnor } from "../../../src/boolean/xnor";

describe("xnor()", function () {
    describe("with true and true", function () {
        it("should return true", function () {
            true::xnor(true).should.equal(true);
        });
    });

    describe("with true and false", function () {
        it("should return false", function () {
            true::xnor(false).should.equal(false);
        });
    });

    describe("with false and true", function () {
        it("should return false", function () {
            false::xnor(true).should.equal(false);
        });
    });

    describe("with false and false", function () {
        it("should return true", function () {
            false::xnor(false).should.equal(true);
        });
    });
});
