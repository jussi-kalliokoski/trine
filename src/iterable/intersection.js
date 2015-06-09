"use strict";

/**
 * Yields the sorted intersection iterator of two sorted iterators.
 *
 * @this {Iterable<T>}
 * @param comparator The sorting value function. Should return `0` when items are equal, a positive number when the item on the left is greater and a negative number when the item on the right is greater.
 * @ntime O(n+m)
 * @dspace O(2)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3,4,5]::intersection([2,3,4,6], function (b) {
 *   return this - b;
 * }); // yields 2,3,4
 * ```
*/
export function * intersection <T> (
    b : Iterable<T>,
    comparator : (item: T) => number,
) {
};
