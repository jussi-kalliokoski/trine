"use strict";

import { pairs } from "../../../src/iterable/pairs";

describe("pairs()", function () {
    it("should yield key-value pairs of an object", function () {
        [...{a:1,b:2,c:3}::pairs()].should.deep.equal([
            {key:'a',value:1},
            {key:'b',value:2},
            {key:'c',value:3}
        ]);
    });
});
