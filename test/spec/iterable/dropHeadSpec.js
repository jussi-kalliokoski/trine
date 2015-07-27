import { dropHead } from "../../../src/iterable/dropHead";

describe("dropHead()", function () {
    it("should take all items except the first k", function () {
        [...[1,2,3]::dropHead(2)].should.deep.equal([3]);
        [...[1,2,3,4,5]::dropHead(0)].should.deep.equal([1,2,3,4,5]);
        [...[1,2,3,4,5]::dropHead(6)].should.deep.equal([]);
    });

    describe("when called with something other than a positive integer", function () {
        it("should throw", function () {
            (()=> [...[1,2,3]::dropHead(-1)]).should.throw();
        });
    });
});
