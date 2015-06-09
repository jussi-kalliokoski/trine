"use strict";

/**
 * Yields the sorted difference iterator of two sorted iterators.
 *
 * @this {Iterable<T>}
 * @param comparator The sorting value function. Should return `0` when items are equal, a positive number when the item on the left is greater and a negative number when the item on the right is greater.
 * @ntime O(n+m)
 * @dspace O(2)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,4]::difference([2,3,4,5], function (b) {
 *   return this - b;
 * }); // yields 1,3,5
 * ```
*/
export function * difference <T> (
    b : Iterable<T>,
    comparator : (item: T) => number,
) {
};
