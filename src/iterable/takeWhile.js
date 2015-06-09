"use strict";

/**
 * Yields the items until an item that matches the condition is found.
 *
 * @this {Iterable<T>}
 * @param condition A condition called on every item to see if it should be taken.
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3,4,1,2,3,4]::takeWhile(function () {
 *   return this &lt; 4;
 * }) // yields 1, 2, 3
 * ```
*/
export function * takeWhile <T> (
    condition : (_this : T) => boolean,
) : Iterable<T> {
    for ( const item of this ) {
        if ( !item::condition() ) { return; }
        yield item;
    }
};
