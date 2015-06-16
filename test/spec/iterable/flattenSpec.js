"use strict";

import { flatten } from "../../../src/iterable/flatten";

describe("flatten()", function () {
    it("should flatten an empty array", function () {
      [...[]::flatten()].should.deep.equal([]);
    });
    it("should flatten a simple array", function () {
      [...[1]::flatten()].should.deep.equal([1]);
    });
    it("should flatten more than one array", function () {
      [...[[1],[2]]::flatten()].should.deep.equal([1,2]);
    });
    it("should flatten a nested array", function () {
      [...[[1,2]]::flatten()].should.deep.equal([1,2]);
    });
    it("should flatten a mix of arrays and values", function () {
      [...[[1,2], [1],3]::flatten()].should.deep.equal([1,2,1,3]);
    });
});
