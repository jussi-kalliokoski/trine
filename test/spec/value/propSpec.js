import { prop } from "../../../src/value/prop";

describe("prop()", function () {
    it("should return the given property of the value", function () {
        ({ x: "bar", y: "foo", z: "qoo" })::prop("y").should.equal("foo");
        ({ foo: "x", y: "n" })::prop("foo").should.equal("x");
    });
});
