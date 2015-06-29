"use strict";

/**
 * Yields a flatten array
 *
 * @this {Iterable<T>}
 * @example Basic Usage
 *
 * ```javascript
 * [[1],[2]]::flatten() // yields [1,2]
 * ```
*/

export function * flatten <T> (

) : Iterable<T> {
    for ( const item of this ) {
        if ( item[Symbol.iterator] ) {
            yield * item;
        }
        else {
            yield item;
        }
    }
}
