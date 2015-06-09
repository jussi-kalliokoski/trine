"use strict";

import { sortAlphabeticallyBy } from "../../../src/iterable/sortAlphabeticallyBy";

describe("sortAlphabeticallyBy()", function () {
    it("should sort the items alphabetically by given transform", function () {
        [...[{
            x: 1,
            id: "foo",
        }, {
            x: 2,
            id: "bar",
        }, {
            x: 3,
            id: "qoo",
        }]::sortAlphabeticallyBy(function () {
            return this.id;
        })].should.deep.equal([{
            x: 2,
            id: "bar",
        }, {
            x: 1,
            id: "foo",
        }, {
            x: 3,
            id: "qoo",
        }]);
    });
});
