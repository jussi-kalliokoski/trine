import { sortAlphabetically } from "./sortAlphabetically";
import { map } from "./map";

/**
 * Yields the items of the iterator sorted by a given comparator.
 *
 * @this {Iterable<T>}
 * @ntime Engine-specific
 * @dspace Engine-specific
 * @example Basic Usage
 *
 * ```javascript
 * [{
 *   value: "foo",
 * }, {
 *   value: "bar",
 * }]::sortAlphabeticallyBy(function () {
 *   return this.value;
 * }) // yields { value: "bar" }, { value: "foo" }
 * ```
*/
export function * sortAlphabeticallyBy <T> (
    transformer : (_this : T) => string,
) : Iterable<T> {
    yield * this
        ::map(function () {
            const string = this::transformer();
            return { value: this, toString: () => string };
        })
        ::sortAlphabetically()
        ::map(function () {
            return this.value;
        });
};
