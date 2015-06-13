"use strict";

/**
 * Yields the values of the bound object.
 *
 * @this {Object}
 * @ntime O(n)
 * @dspace O(n)
 * @example Basic Usage
 *
 * ```javascript
 * {a:1,b:2,c:3}::values() // yields 1, 2, 3
 * ```
*/
export function * values () : Iterable<any> {
    yield * Object.values(this);
};
