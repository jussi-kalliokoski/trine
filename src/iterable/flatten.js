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

import { flattenDeep } from "./flattenDeep";

export function * flatten() :
  Iterable<T> {
    yield* this::flattenDeep(1);
  }
