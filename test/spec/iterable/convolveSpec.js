"use strict";

import { convolve } from "../../../src/iterable/convolve";

describe("convolve()", function () {
    it("should yield the results mapped over item and its tail", function () {
        [...[4,5,6]::convolve(function (tail) {
            return this + tail.reduce(function (a, b) {
                return a + b;
            }, 0);
        }, [3,2,1])].should.deep.equal([10, 14, 18]);
    });
});
