import { is } from "../../../src/value/is";

describe("is()", function () {
    describe("when both values are undefined", function () {
        it("should return true", function () {
            undefined::is(undefined).should.equal(true);
        });
    });

    describe("when both values are null", function () {
        it("should return true", function () {
            null::is(null).should.equal(true);
        });
    });

    describe("when booleans are given", function () {
        it("should return true if both values are true", function () {
            true::is(true).should.equal(true);
        });

        it("should return true if both values are false", function () {
            false::is(false).should.equal(true);
        });

        it("should return false if one value is true and the other is false", function () {
            true::is(false).should.equal(false);
            false::is(true).should.equal(false);
        });
    });

    describe("when strings are given", function () {
        it("should return true if both strings have the same length with the same characters", function () {
            "foo"::is("foo").should.equal(true);
        });

        it("should return false if the strings are not of the same length or the same characters", function () {
            "foo"::is("bar").should.equal(false);
        });
    });

    describe("when object are given", function () {
        it("should return true if the object references are the same", function () {
            let test = {};
            test::is(test).should.equal(true);
        });

        it("should return false if the object referenes are not the same", function () {
            let test1 = {};
            let test2 = {};
            test1::is(test2).should.equal(false);
        });
    });

    describe("when numbers are given", function () {
        it("should return true if both numbers are the same", function () {
            123::is(123).should.equal(true);
            (-23)::is(-23).should.equal(true);
        });

        it("should return false if the numbers are not the same", function () {
            123::is(321).should.equal(false);
            (-23)::is(-21).should.equal(false);
        });

        it("should return false if one number is positive zero and the other negative zero", function () {
            0::is(-0).should.equal(false);
            (-0)::is(0).should.equal(false);
        });

        it("should return true if both numbers are NaN", function () {
            NaN::is(NaN).should.equal(true);
        });
    });
});
