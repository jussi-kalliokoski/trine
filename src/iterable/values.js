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
 * {a:1,b:2:c:3}::keys()
 * }) // yields 'a', 'b', 'c'
 * ```
*/
export function * values() : Iterable<Object> {
  yield* Object.keys(this).map( (key)=>this[key] );
};
