import { toFunction } from "../../../src/value/toFunction";

describe("toFunction()", function () {
    it("should a function that always returns the value", function () {
        const fn1 = "foo"::toFunction();
        fn1().should.equal("foo");
        fn1().should.equal("foo");
        const fn2 = 2::toFunction();
        fn2().should.equal(2);
        fn2().should.equal(2);
    });
});
