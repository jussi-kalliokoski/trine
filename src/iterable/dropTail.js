/**
 * Yields all the items of the iterator except the last k items.
 *
 * @this {Iterable<T>}
 * @ntime O(n)
 * @dspace O(n)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::dropTail(0) // yields 1, 2, 3
 * [1,2,3]::dropTail(1) // yields 1, 2
 * [1,2,3]::dropTail(2) // yields 1
 * [1,2,3]::dropTail(3) // doesn't yield anything
 * [1,2,3]::dropTail(4) // doesn't yield anything
 * ```
*/
export function * dropTail <T> (
    k : number,
) : Iterable<T> {
    if ( !( k >= 0 ) ) {
        throw new Error("only positive integers are allowed for tail()");
    }

    const all = [...this];
    yield * all.slice(0, Math.max(0, all.length - k));
};
