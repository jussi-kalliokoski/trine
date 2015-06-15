"use strict";

import { difference } from "../../../src/iterable/difference";

describe("difference()", function () {
    it("should yield the differences of two sorted iterators", function () {
        [...[[1,2,4], [2,3,4,5]]::difference(function (b) {
            return this - b;
        })].should.deep.equal([1,3,5]);
    });

    describe("when provided less than 2 iterators", function () {
        it("should throw", function () {
            void function () {
                [...[[1]]::difference(function (b) {
                    return this - b;
                })];
            }.should.throw();
        });
    });

    describe("when provided more than 2 iterators", function () {
        it("should throw", function () {
            void function () {
                [...[[1], [2], [3]]::difference(function (b) {
                    return this - b;
                })];
            }.should.throw();
        });
    });
});
