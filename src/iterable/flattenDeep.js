"use strict";

/**
 * Yields the elements in the iterable at the given depth.
 * Flattening with depth of 1 is the same as doing a plain `flatten()`.
 *
 * @this {Iterable}
 * @param depth The depth that the generator will flatten to.
 * @example Basic Usage
 *
 * ```javascript
 * [[[1],[2]]]::flattenDeep(2) // yields [1,2]
 * ```
*/

export function * flattenDeep <T> (
    depth : number,
) : Iterable {
    if ( depth < 0 ) {
        yield this;
        return;
    }

    for ( const item of this ) {
        yield * item::flattenDeep(depth - 1);
    }
};
