import { tee } from "../../../src/iterable/tee";

describe("tee()", function () {
    it("should buffer up the elements of the iterator" +
    " so that all the resulting iterators give the same results", function () {
        const source = [1,2,3][Symbol.iterator]();
        const forks = source::tee();
        const a = forks.next().value;
        const b = forks.next().value;
        const c = forks.next().value;

        a.next().value.should.equal(1);
        b.next().value.should.equal(1);
        c.next().value.should.equal(1);

        [...a].should.deep.equal([2,3]);
        b.next().value.should.equal(2);
        [...c].should.deep.equal([2,3]);
        b.next().value.should.equal(3);

        a.next().done.should.equal(true);
        b.next().done.should.equal(true);
        c.next().done.should.equal(true);
    });

    describe("when called after iteration has started", function () {
        it("should throw", function () {
            const source = [1,2,3][Symbol.iterator]();
            const forks = source::tee();
            const a = forks.next().value;
            a.next();

            void function () {
                const b = forks.next().value;
            }.should.throw();
        });
    });
});
