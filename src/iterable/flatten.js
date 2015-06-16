"use strict";

/**
 * Yields a flatten array
 *
 * @this {Iterable<T>}
 * @example Basic Usage
 *
 * ```javascript
 * [[1],[2]]::flatten() // yields [1,2]
 * ```
*/

export function * flatten () : Iterable<T> {
    for (let x of this) {
      if (typeof(x[Symbol.iterator]) == "function") {
        yield* x::flatten();
      } else {
        yield x;
      }
    }
  };
