"use strict";

/**
 * A pure JS alternative to the builtin sort - operates directly on iterators, so it can be advantageous to native sort in cases where
 * you only need a few of the sorted items, e.g. 15 first products sorted
 * by price. The first items get sorted precisely first so the whole set
 * does not necessarily need to be sorted.
 *
 * @this {Iterable<T>}
 * @ntime O(n²)
 * @dspace O(n)
 * @example Basic Usage
 *
 * ```javascript
 * [3,2,5,1,4]::quickSort(function (b) {
 *   return this - b;
 * }); // yields 1,2,3,4,5
 * ```
*/
export function * quickSort <T> (
    comparator : (b : T) => number,
) {
};
