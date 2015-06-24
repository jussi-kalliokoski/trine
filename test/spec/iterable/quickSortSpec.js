import { quickSort } from "../../../src/iterable/quickSort";

describe("quickSort()", function () {
    it("should sort the items according to the comparator", function () {
        [...[5,1,7,23,8,2,5,87,1]::quickSort(function (b) {
            return this - b;
        })].should.deep.equal([1,1,2,5,5,7,8,23,87]);
    });
});
