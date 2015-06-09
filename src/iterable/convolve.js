"use strict";

/**
 * Maps the iterator with the additional tail of `k` previous items.
 * `k` is determined by the number of items in the accumulation iterator.
 *
 * @this {Iterable<T>}
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
export function * convolve (
    accumulator : (accumulation : rT, item : iT) => rT,
    tail : Iterable<iT>,
) {
};
