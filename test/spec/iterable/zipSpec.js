import { zip } from "../../../src/iterable/zip";

function * iter () {
    let i = 0;

    while ( true ) {
        yield ++i;
    }
}

function * iterIter () {
    yield iter();
    yield [4, 5];
    yield [6, 7];
}

describe("zip()", function () {
    const zipped = [
        [1, 4, 6],
        [2, 5, 7],
    ];

    it("should zip empty arrays", function () {
        const toZip = [[1, 2, 3],[]];
        [...toZip::zip()].should.deep.equal([]);
        [...[]::zip()].should.deep.equal([]);
    });

    it("should zip arrays correctly", function () {
        const toZip = [ [1, 2, 3], [4, 5], [6, 7] ];
        [...toZip::zip()].should.deep.equal(zipped);
    });

    it("should zip iterators correctly", function () {
        const toZip = iterIter();
        [...toZip::zip()].should.deep.equal(zipped);
    });
});
