"use strict";

import { to } from "../../../src/iterable/to";

describe("to()", function () {
    describe("when called with Array constructor", function () {
        it("should return the items as an Array", function () {
            [1,2,3,4][Symbol.iterator]()::to(Array).should.deep.equal([1,2,3,4]);
        });
    });

    describe("when called with Object constructor", function () {
        it("should return the entries as an Object", function () {
            [["foo", "bar"], ["qoo", "doo"]][Symbol.iterator]()::to(Object).should.deep.equal({
                foo: "bar",
                qoo: "doo",
            });
        });
    });

    describe("when called with Map constructor", function () {
        it("should return the entries as a Map", function () {
            [...[["foo", "bar"], ["qoo", "doo"]][Symbol.iterator]()::to(Map).entries()].should.deep.equal([
                ["foo", "bar"],
                ["qoo", "doo"],
            ]);
        });
    });

    describe("when called with Set constructor", function () {
        it("should return the values as a Set", function () {
            [...[1,2,3,4][Symbol.iterator]()::to(Set)].should.deep.equal([1,2,3,4]);
        });
    });
});
