/**
 * Yields all the items of the iterator except the first k items.
 *
 * @this {Iterable<T>}
 * @ntime O(n)
 * @dspace O(n)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::dropHead(0) // yields 1, 2, 3
 * [1,2,3]::dropHead(1) // yields 1, 2
 * [1,2,3]::dropHead(2) // yields 1
 * [1,2,3]::dropHead(3) // doesn't yield anything
 * [1,2,3]::dropHead(4) // doesn't yield anything
 * ```
*/
export function * dropHead <T> (
    k : number,
) : Iterable<T> {
    if ( !( k >= 0 ) ) {
        throw new Error("only positive integers are allowed for head()");
    }

    const iterator = this[Symbol.iterator]();
    let done = false;

    while ( !done && k-- ) {
        done = iterator.next().done;
    }

    yield * iterator;
};
