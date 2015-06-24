/**
 * Yields the k first items of the iterator.
 *
 * @this {Iterable<T>}
 * @ntime O(k)
 * @dspace O(k)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::head(1) // yields 1
 * [1,2,3]::head(2) // yields 1, 2
 * [1,2,3]::head(3) // yields 1, 2, 3
 * [1,2,3]::head(4) // yields 1, 2, 3
 * ```
*/
export function * head <T> (
    k : number,
) : Iterable<T> {
    let index = 0;

    for ( const item of this ) {
        if ( index++ >= k ) { return; }
        yield item;
    }
};
