"use strict";

/**
 * Yields the entries of the bound object.
 *
 * @this {Object}
 * @ntime O(n)
 * @dspace O(n)
 * @example Basic Usage
 *
 * ```javascript
 * {a:1,b:2,c:3}::entries() // yields ["a",1], ["b",2], ["c",3] 
 * ```
*/
export function * entries () : Iterable<[string, any]> {
    yield * Object.entries(this);
};
