import { dropTail } from "../../../src/iterable/dropTail";

describe("dropTail()", function () {
    it("should take all items except the last k", function () {
        [...[1,2,3]::dropTail(2)].should.deep.equal([1]);
        [...[1,2,3,4,5]::dropTail(0)].should.deep.equal([1,2,3,4,5]);
        [...[1,2,3,4,5]::dropTail(6)].should.deep.equal([]);
    });

    describe("when called with something other than a positive integer", function () {
        it("should throw", function () {
            (()=> [...[1,2,3]::dropTail(-1)]).should.throw();
        });
    });
});
