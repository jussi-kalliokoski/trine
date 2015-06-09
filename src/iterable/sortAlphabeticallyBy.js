"use strict";

/**
 * Yields the items of the iterator sorted by a given comparator.
 *
 * @this {Iterable<T>}
 * @ntime Engine-specific
 * @dspace Engine-specific
 * @example Basic Usage
 *
 * ```javascript
 * [{
 *   value: "foo",
 * }, {
 *   value: "bar",
 * }]::sortAlphabeticallyBy(function () {
 *   return this.value;
 * }) // yields { value: "bar" }, { value: "foo" }
 * ```
*/
export function * sortAlphabeticallyBy <T> (
    transformer : (b : T) => string,
) {
};
