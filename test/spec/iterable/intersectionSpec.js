import { intersection } from "../../../src/iterable/intersection";

describe("intersection()", function () {
    it("should yield the intersection of two sorted iterators when first element of the first iterator is lower than the first element of the second iterator", function () {
        [...[[1,2,3,4,5], [2,3,4,6]]::intersection(function (b) {
            return this - b;
        })].should.deep.equal([2,3,4]);
    });

    it("should yield the intersection of two iterators when the first element of the first iterator is higher than the first element of the second iterator", function () {
        [...[[3,4,5,6,7], [2,3,4,6]]::intersection(function (b) {
            return this - b;
        })].should.deep.equal([3,4,6]);
    });

    describe("when provided less than 2 iterators", function () {
        it("should throw", function () {
            void function () {
                [...[[1]]::intersection(function (b) {
                    return this - b;
                })];
            }.should.throw();
        });
    });

    describe("when provided more than 2 iterators", function () {
        it("should throw", function () {
            void function () {
                [...[[1], [2], [3]]::intersection(function (b) {
                    return this - b;
                })];
            }.should.throw();
        });
    });
});
