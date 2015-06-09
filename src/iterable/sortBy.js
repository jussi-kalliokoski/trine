"use strict";

import { sort } from "./sort";

/**
 * Yields the items of the iterator sorted based on score of the item returned by the transformer.
 *
 * @this {Iterable<T>}
 * @ntime Algorithm dependent
 * @dspace Algorithm dependent
 * @example Basic Usage
 *
 * ```javascript
 * [{
 *   value: 2,
 * }, {
 *   value: 1,
 * }]::sortBy(function () { return this.value; }) // yields { value: 1 }, { value: 2 }
 * ```
*/
export function * sortBy <T> (
    transformer : (_this : T) => number,
) : Iterable<T> {
    yield * this::sort(function (b) {
        return this::transformer() - b::transformer();
    });
};
