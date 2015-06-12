"use strict";

import { keys } from "../../../src/object/keys";

describe("keys()", function () {
    it("should yield the keys of an object", function () {
        [...{a:1,b:2,c:3}::keys()].should.deep.equal(["a","b","c"]);
    });
});
