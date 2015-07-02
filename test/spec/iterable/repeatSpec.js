import { head } from "../../../src/iterable/head";
import { repeat } from "../../../src/iterable/repeat";

describe("repeat()", function () {
    it("indefinitely repeats the values of an iterator", function () {
        [...[1,2,3]::repeat()::head(6)].should.deep.equal([1,2,3,1,2,3]);
    });
});
