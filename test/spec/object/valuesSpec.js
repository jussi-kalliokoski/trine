"use strict";

import { values } from "../../../src/object/values";

describe("values()", function () {
    it("should yield the values of an object", function () {
        [...{a:1,b:2,c:3}::values()].should.deep.equal([1,2,3]);
    });
});
