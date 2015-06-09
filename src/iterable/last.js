"use strict";

/**
 * Yields the k-th item from the end of the iterator.
 *
 * @this {Iterable<T>}
 * @ntime O(n)
 * @dspace O(k)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::last(0) // yields 3
 * [1,2,3]::last(1) // yields 2
 * [1,2,3]::last(2) // yields 1
 * [1,2,3]::last(3) // yields nothing
 * ```
*/
export function * last <T> (
    k : number,
) : Iterable<T> {
    let buffer = [];

    for ( const item of this ) {
        buffer = buffer
            .concat([item])
            .slice(-(k + 1));
    }

    if ( buffer.length === k + 1 ) {
        yield buffer[0];
    }
};
