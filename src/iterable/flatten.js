"use strict";

/**
 * Yields the elements in the iterables of the iterable.
 *
 * @this {Iterable<Iterable<T>>}
 * @example Basic Usage
 *
 * ```javascript
 * [[1],[2]]::flatten() // yields [1,2]
 * ```
*/

export function * flatten <T> (

) : Iterable<T> {
    for ( const item of this ) {
        yield * item;
    }
}
