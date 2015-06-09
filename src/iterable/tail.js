"use strict";

/**
 * Yields the k last items of the iterator.
 *
 * @this {Iterable<T>}
 * @ntime O(n)
 * @dspace O(k)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::tail(1) // yields 3
 * [1,2,3]::tail(2) // yields 2, 3
 * [1,2,3]::tail(3) // yields 1, 2, 3
 * [1,2,3]::tail(4) // yields 1, 2, 3
 * ```
*/
export function * tail <T> (
    k : number,
) : Iterable<T> {
    let buffer = [];

    for ( const item of this ) {
        buffer = buffer
            .concat([item])
            .slice(-k);
    }

    yield * buffer;
};
