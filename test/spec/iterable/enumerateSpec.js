"use strict";

import { enumerate } from "../../../src/iterable/enumerate";

describe("enumerate()", function () {
    it("should yield enumerated items", function () {
       [...[1,2,3]::enumerate()].should.deep.equal([ 
           [0,1],
           [1,2],
           [2,3]
       ]);
    });
});
