"use strict";

/**
 * Yields the sorted union iterator of two sorted iterators.
 *
 * @this {Iterable<Iterable<T>>}
 * @param comparator The sorting value function. Should return `0` when items are equal, a positive number when the item on the left is
 * greater and a negative number when the item on the right is greater.
 * @ntime O(n+m)
 * @dspace O(2)
 * @example Basic Usage
 *
 * ```javascript
 * [[2,3,4,7,8,9], [1,5,6,7]]::union(function (b) {
 *   return this - b;
 * }); // yields 1,2,3,4,5,6,7,8,9
 * ```
*/
export function * union <T> (
    comparator : (_this: T, b : T) => number,
) : Iterable<T> {
    const iterators = [...this].map((item) => item[Symbol.iterator]());

    if ( iterators.length !== 2 ) {
        throw new Error("union() takes two iterators, " +
            iterators.length + " were passed");
    }

    const [iteratorA, iteratorB] = iterators;
    let stepA = iteratorA.next();
    let stepB = iteratorB.next();

    while ( !stepA.done && !stepB.done ) {
        const comparison = stepA.value::comparator(stepB.value);

        if ( comparison < 0 ) {
            yield stepA.value;
            stepA = iteratorA.next();
        } else if ( comparison > 0 ) {
            yield stepB.value;
            stepB = iteratorB.next();
        } else {
            yield stepA.value;
            stepA = iteratorA.next();
            stepB = iteratorB.next();
        }
    }

    if ( !stepA.done ) {
        yield stepA.value;
        yield * iteratorA;
    } else if ( !stepB.done ) {
        yield stepB.value;
        yield * iteratorB;
    }
};
