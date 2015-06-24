import { aggregate } from "./aggregate";
import { last } from "./last";

/**
 * Yields the accumulation of the iterator with a given accumulator method.
 *
 * @type rT The item type of the returned iterator.
 * @type iT The item type of the input iterator.
 * @this {Iterable<iT>}
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [3,2,5,1,4]::reduce(function (b) {
 *   return this + b;
 * }, 0); // yields 15
 * ```
*/
export function * reduce <rT, iT> (
    accumulator : (_this : rT, item : iT) => rT,
    accumulation : rT,
) : Iterable<rT> {
    yield * this
        ::aggregate(accumulator, accumulation)
        ::last(0)
        ;
};
