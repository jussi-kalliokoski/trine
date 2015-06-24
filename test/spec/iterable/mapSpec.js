import { map } from "../../../src/iterable/map";

describe("map()", function () {
    it("should map the items over a transformer method", function () {
        [...[1,2,3]::map(function () {
            return this * 2;
        })].should.deep.equal([2,4,6])
    });
});
