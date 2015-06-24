/**
 * Yields the first item that matches condition, and all the items after that.
 *
 * @this {Iterable<T>}
 * @param condition A condition called on every item to see if it should be dropped.
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3,4,1,2,3,4]::dropWhile(function () {
 *   return this < 4;
 * }) // yields 4, 1, 2, 3, 4
 * ```
*/
export function * dropWhile <T> (
    condition : (_this : T) => boolean,
) : Iterable<T> {
    const iterator = this[Symbol.iterator]();

    for ( const item of iterator ) {
        if ( item::condition() ) { continue; }
        yield item;
    }

    yield * iterator;
};
