/**
 * Yields the number of items in the iterator.
 *
 * @this {Iterable<any>}
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::count() // yields 3
 * ```
*/
export function * count (
) : Iterable<T> {
    let count = 0;

    for ( const item of this ) {
        count++;
    }

    yield count;
};
