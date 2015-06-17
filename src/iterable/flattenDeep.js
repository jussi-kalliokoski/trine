"use strict";

/**
 * Yields a flatten array where the deep level is specified.
 * flattenDeep(1) will have the same behavior as flatten().
 *
 * @this {Iterable<T>}
 * @param deepness sets the maximum level that the generator will iterate
 * @example Basic Usage
 *
 * ```javascript
 * [[[1],[2]]]::flattenDeep(2) // yields [1,2]
 * ```
*/

export function * flattenDeep (deepness : integer ) :
  Iterable<T> {
    let currentDeepness = deepness;
    for (let x of this) {
      if (typeof(x[Symbol.iterator]) == 'function' && currentDeepness) {
        yield* x::flattenDeep(--currentDeepness);
      } else {
        yield x;
      }
      currentDeepness = deepness;
    }
  };
