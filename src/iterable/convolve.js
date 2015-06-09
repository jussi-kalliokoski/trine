"use strict"

/**
 * Maps the iterator with the additional tail of <code>k</code> previous items.
 * <code>k</code> is determined by the number of items in the accumulation iterator.
 *
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
export function convolve (
) {
};
