import { entries } from "../../../src/object/entries";

describe("entries()", function () {
    it("should yield key-value pairs of an object", function () {
        [...{a:1,b:2,c:3}::entries()].should.deep.equal([
            ["a",1],
            ["b",2],
            ["c",3],
        ]);
    });
});
