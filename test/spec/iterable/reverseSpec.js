import { reverse } from "../../../src/iterable/reverse";

describe("reverse()", function () {
    it("should return the items of the iterator in reverse order", function () {
        [...[1,2,3,1]::reverse()].should.deep.equal([1,3,2,1]);
    });
});
