import { first } from "../../../src/iterable/first";

describe("first()", function () {
    it("should return only the N-th value in the iterator", function () {
        [...[1,2,3]::first(0)].length.should.equal(1);
        [...[1,2,3]::first(0)][0].should.equal(1);
        [...[4,5,7]::first(1)].length.should.equal(1);
        [...[4,5,7]::first(1)][0].should.equal(5);
    });
});
