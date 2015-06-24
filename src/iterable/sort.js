/**
 * Yields the items of the iterator sorted by a given comparator.
 *
 * @this {Iterable<T>}
 * @ntime Engine-specific
 * @dspace Engine-specific
 * @example Basic Usage
 *
 * ```javascript
 * [3,2,1]::sort(function (b) { return this - b; }) // yields 1, 2, 3
 * ```
*/
export function * sort <T> (
    comparator : (_this : T, b : T) => number,
) : Iterable<T> {
    yield * [...this].sort((a, b) => a::comparator(b));
};
