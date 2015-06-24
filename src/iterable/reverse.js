/**
 * Yields the items of the iterator in reverse order.
 *
 * @this {Iterable<T>}
 * @ntime O(n)
 * @dspace O(2n)
 * @example Basic Usage
 *
 * ```javascript
 * [5,4,1,2,3]::reverse() // yields 3, 2, 1, 4, 5
 * ```
*/
export function * reverse <T> (

) : Iterable<T> {
    yield * [...this].reverse();
};
