"use strict";

/**
 * Yields the sorted union iterator of two sorted iterators.
 *
 * @this {Iterable<T>}
 * @param comparator The sorting value function. Should return `0` when items are equal, a positive number when the item on the left is greater and a negative number when the item on the right is greater.
 * @ntime O(n+m)
 * @dspace O(2)
 * @example Basic Usage
 *
 * ```javascript
 * [2,3,4,7,8,9]::union([1,5,6,7], function (b) {
 *   return this - b;
 * }); // yields 1,2,3,4,5,6,7,8,9
 * ```
*/
export function * union <T> (
    b : Iterable<T>,
    comparator : (item: T) => number,
) {
};
