"use strict";

/**
 * Yields the items of the iterator mapped through a given transformer.
 *
 * @type iT The item type of the input iterator.
 * @type rT The item type of the returned iterator.
 * @this {Iterable<iT>}
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::map(function () {
 *   return this * 2;
 * }) // yields 2, 4, 6
 * ```
*/
export function * map <iT, rT> (
    transformer : () => rT,
) : Iterable<rT> {
};
