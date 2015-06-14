"use strict";

import { zip } from "../../../src/iterable/zip";

function * iter1 () {
    let i=0;
    while(1){
        yield ++i;
    }
}

function * iterIter () {
    yield iter1();
    yield [4,5];
    yield [6,7];
}

describe("zip()", function () {

    let zipped = [
        [1,4,6],
        [2,5,7],
    ];

    it("should zip arrays correctly", function () {
        var toZip = [ [1,2,3], [4,5], [6,7] ];
        [...toZip::zip()].should.deep.equal(zipped);
    });

    it("should zip iterators correctly", function () {
        var toZip = iterIter();
        [...toZip::zip()].should.deep.equal(zipped);
    });
});
