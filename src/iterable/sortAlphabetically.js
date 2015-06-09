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
 * ["foo", "bar"]::sortAlphabetically() // yields "bar", "foo"
 * "cba"::sortAlphabetically() // yields "a", "b", "c"
 * ```
*/
export function * sortAlphabetically <T> (

) : Iterable<T> {
    yield * [...this].sort();
};
