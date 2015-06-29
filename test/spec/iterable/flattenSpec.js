"use strict";

import { flatten } from "../../../src/iterable/flatten";

describe("flatten()", function () {
    it("should return an empty array", function () {
      [...[]::flatten()].should.deep.equal([]);
    });

    it("should not flatten a non iterable item", function () {
      [...[1]::flatten()].should.deep.equal([]);
    });

    it("should flatten as default 1 level deep", function () {
      [...[[1],[2]]::flatten()].should.deep.equal([1,2]);
    });

    it("should flatten a mix of arrays and values", function () {
      [...[[1,2],[1],[3]]::flatten()].should.deep.equal([1,2,1,3]);
    });

    it("shouldn't flatten more than 1 level deep", function () {
      [...[[1,2,[3,4]]]::flatten()].should.deep.equal([1,2,[3,4]]);
    });

    it("should flatten string", function () {
      [...["hello"]::flatten()].should.deep.equal(["h","e","l","l","o"]);
    });

    it("should flatten array of strings", function () {
      const outcome = ["h","e","l","l","o","w","o","r","l","d"];
      [...["hello", "world"]::flatten()].should.deep.equal(outcome);
    });

    it("should flatten map", function () {
      const map = new Map([[1,"a"], [2, "b"]]);
      [...[map]::flatten()].should.deep.equal([[1,"a"], [2,"b"]]);
    });

    it("should flatten set", function () {
      const set = new Set(["a", [1,2,3]]);
      [...[set]::flatten()].should.deep.equal(["a", [1,2,3]]);
    });

    it("should flatten a mix of types", function () {
      const elements = [
        new Set(["a", 1]),
        [4,5,6],
        new Map([[1,"a"], [2, "b"]]),
        "cd"
      ];
      const outcome = ["a", 1,4,5,6, [1,"a"], [2,"b"], "c","d"];
      [...elements::flatten()].should.deep.equal(outcome);
    });
});
