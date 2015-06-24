import { equals } from "../../../src/boolean/equals";

describe("and()", function () {
    describe("when the values are equal", function () {
        it("should return true", function () {
            "foo"::equals("foo").should.equal(true);
        });
    });

    describe("when the values are not equal", function () {
        it("should return false", function () {
            "foo"::equals("bar").should.equal(false);
        });
    });
});
