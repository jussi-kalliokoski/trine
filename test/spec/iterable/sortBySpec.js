import { sortBy } from "../../../src/iterable/sortBy";

describe("sortBy()", function () {
    it("should sort the items alphabetically by given transform", function () {
        [...[{
            x: 3,
            id: "qoo",
        }, {
            x: 1,
            id: "foo",
        }, {
            x: 2,
            id: "bar",
        }]::sortBy(function () {
            return this.x;
        })].should.deep.equal([{
            x: 1,
            id: "foo",
        }, {
            x: 2,
            id: "bar",
        }, {
            x: 3,
            id: "qoo",
        }]);
    });
});
