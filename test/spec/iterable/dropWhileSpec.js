import { dropWhile } from "../../../src/iterable/dropWhile";

describe("dropWhile()", function () {
    it("should yield items only after the condition is false", function () {
        [...[1,2,3,4,5,6,7]::dropWhile(function () {
            return this < 4;
        })].should.deep.equal([4,5,6,7]);
    });
});
