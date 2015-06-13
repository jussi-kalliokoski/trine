"use strict";

/**
 * Yields the items of the iterator with its index  
 *
 * @type iT The item type of the input iterator.
 * @this {Iterable<iT>}
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::enumerate() // yields [0,1] , [1,2] , [2,3]
 * ```
*/
export function * enumerate(
 
) : Iterable<[number,iT]> {
    let index = 0;
    for(const item of this) {
        yield [index++,item];
    }
};
