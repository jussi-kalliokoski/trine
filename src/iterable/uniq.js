"use strict";

/**
 * Yields the items that aren't equal to the previous item based on a comparator.
 *
 * @this {Iterable<T>}
 * @param comparator The function to assert equality of the items.
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [{
 *   id: 1,
 * }, {
 *   id: 1,
 * }, {
 *   id: 2,
 * }]::uniq(function (b) {
 *   return this.id === b.id;
 * }); // yields { id: 1 } and { id: 2 }
 *
 * [{
 *   id: 1,
 * }, {
 *   id: 2,
 * }, {
 *   id: 1,
 * }]::uniq(function (b) {
 *   return this.id === b.id;
 * }); // yields { id: 1 }, { id: 2 } and { id: 1 }
 * ```

 *
 * @example Unique Characters in a String
 *
 * ```javascript
 * "bcabbbac"::sortAlphabetically()::uniq(equals) // yields "a", "b", "c"
 * ```
*/
export function * uniq <T> (
    comparator : (item : T) => boolean,
) {
};
