import { tail } from "../../../src/iterable/tail";

describe("tail()", function () {
    it("should yield the N last items in the iterator", function () {
        [...[1,2,3,4,5]::tail(3)].should.deep.equal([3,4,5]);
    });
});
