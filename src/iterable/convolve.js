"use strict";

/**
 * Maps the iterator with the additional tail of `k` previous items.
 * `k` is determined by the number of items in the accumulation iterator.
 *
 * @type rT The item type of the returned iterator.
 * @type iT The item type of the input iterator.
 * @this {Iterable<iT>}
 * @ntime O(n)
 * @dspace O(k)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3].convolve(function (tail) {
 *   return [...tail, this].reduce(add);
 * }, [0, -1]) // yields 0, 3, 6
 * ```
*/
export function * convolve <rT, iT> (
    accumulator : (_this : iT, tail : rT) => rT,
    tail : Iterable<iT>,
) {
    for ( const item of this ) {
        const result = item::accumulator(tail);
        tail = [item].concat(tail.slice(0, tail.length - 1));
        yield result;
    }
};
