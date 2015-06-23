"use strict";

import { flattenDeep } from "../../../src/iterable/flattenDeep";

describe("flattenDeep()", function(){
  it("should flatten a simple nested array", function(){
    [...[[1],[2]]::flattenDeep(1)].should.deep.equal([1,2]);
  });

  it("should flattenDeep to 1 level deep", function () {
    [...[[[[1]],[2,[3]]]]::flattenDeep(1)].should.deep.equal([[[1]],[2,[3]]]);
  });

  it("should flattenDeep to 2 levels deep", function () {
    [...[[[[1]],[2,[3]]]]::flattenDeep(2)].should.deep.equal([[1],2,[3]]);
  });

  it("should flattenDeep to 3 levels deep", function () {
    [...[[[[1]],[2,[3]]]]::flattenDeep(3)].should.deep.equal([1,2,3]);
  });

  it("should flattenDeep set with nested array", function () {
    let set = new Set(["a", [1,2,3]]);
    [...[set]::flattenDeep(2)].should.deep.equal(["a", 1,2,3]);
  });

  it("should flatten generators", function () {
    let generator = function* (){
        yield 1;
        yield 2;
        yield 3;
    }();
    [...[generator]::flattenDeep(1)].should.deep.equal([1,2,3]);
  });

  it("should flatten generator with nesting", function () {
    let generator = function* (){
        yield [1,2];
        yield 3;
        yield 4;
    }();
    [...[generator]::flattenDeep(2)].should.deep.equal([1,2,3,4]);
  });

});
