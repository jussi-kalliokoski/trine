"use strict";

import { sortAlphabetically } from "../../../src/iterable/sortAlphabetically";

describe("sortAlphabetically()", function () {
    it("should sort the items alphabetically", function () {
        [...["foo", "bar", "qoo"]::sortAlphabetically()].should.deep.equal(["bar", "foo", "qoo"]);
    });
});
