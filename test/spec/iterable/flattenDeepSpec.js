"use strict";

import { flattenDeep } from "../../../src/iterable/flattenDeep";

describe("flattenDeep()", function () {

  it("should throw when trying to flatten a non iterable item", function () {
    void function () {
      [...[1,2,3]::flattenDeep(1)]
    }.should.throw();
  })

  it("should flatten a simple nested array", function () {
    [...[[1],[2]]::flattenDeep(1)].should.deep.equal([1,2]);
  });

  it("should flattenDeep to 1 level deep", function () {
    [...[[[[1]],[2,[3]]]]::flattenDeep(1)].should.deep.equal([[[1]],[2,[3]]]);
  });

  it("should flattenDeep to 2 levels deep", function () {
    [...[[[[1]],[2,[3]]]]::flattenDeep(2)].should.deep.equal([[1],2,[3]]);
  });

  it("should flattenDeep to 3 levels deep", function () {
    [...[[[[1]],[[2],[3]]]]::flattenDeep(3)].should.deep.equal([1,2,3]);
  });

  it("should flattenDeep set with nested array", function () {
    const set = new Set(["a", [1,2,3]]);
    [...[set]::flattenDeep(2)].should.deep.equal(["a",1,2,3]);
  });

});
