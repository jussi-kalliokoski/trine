import { drop } from "../../../src/iterable/drop";

describe("drop()", function () {
    it("should drop values that match the condition", function () {
        [...[1,2,3,4,5,6]::drop(function () {
            return this % 2 === 0;
        })].should.deep.equal([1,3,5]);
    });
});
