"use strict";

/**
 * Yields a flatten array where the deep level is specified.
 * flattenDeep(1) will have the same behavior as flatten().
 *
 * @this {Iterable}
 * @param depth sets the maximum depth that the generator will iterate
 * @example Basic Usage
 *
 * ```javascript
 * [[[1],[2]]]::flattenDeep(2) // yields [1,2]
 * ```
*/

export function * flattenDeep <T> (
  depth : number
) : Iterable<T> {
    if ( depth < 0 ) {
        yield this;
        return;
    }
    for ( const item of this ) {
        if ( item[Symbol.iterator] ) {
            yield * item::flattenDeep(depth - 1 );
        } else {
            yield item;
        }
    }
};
