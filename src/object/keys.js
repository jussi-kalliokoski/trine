"use strict";

/**
 * Yields the keys of the bound object.
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
export function * keys () : Iterable<String> {
  yield* Object.keys(this);
};
