"use strict";

import { union } from "../../../src/iterable/union";

describe("union()", function () {
    it("should yield the union of two sorted iterators", function () {
        [...[[2,3,4,7,8,9], [1,5,6,7]]::union(function (b) {
            return this - b;
        })].should.deep.equal([1,2,3,4,5,6,7,8,9]);
    });

    describe("when provided less than 2 iterators", function () {
        it("should throw", function () {
            void function () {
                [...[[1]]::union(function (b) {
                    return this - b;
                })];
            }.should.throw();
        });
    });

    describe("when provided more than 2 iterators", function () {
        it("should throw", function () {
            void function () {
                [...[[1], [2], [3]]::union(function (b) {
                    return this - b;
                })];
            }.should.throw();
        });
    });
});
