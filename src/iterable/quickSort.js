/**
 * A pure JS alternative to the builtin sort - operates directly on iterators, so it can be advantageous to native sort in cases where
 * you only need a few of the sorted items, e.g. 15 first products sorted
 * by price. The first items get sorted precisely first so the whole set
 * does not necessarily need to be sorted.
 *
 * @this {Iterable<T>}
 * @ntime O(n²)
 * @dspace O(n)
 * @example Basic Usage
 *
 * ```javascript
 * [3,2,5,1,4]::quickSort(function (b) {
 *   return this - b;
 * }); // yields 1,2,3,4,5
 * ```
*/
export function * quickSort <T> (
    comparator : (_this: T, b : T) => number,
) : Iterable<T> {
    const iterator = this[Symbol.iterator]();
    const smaller = [];
    const greater = [];
    const first = iterator.next();

    if ( first.done ) { return; }

    const pivot = first.value;

    for ( const item of iterator ) {
        const comparison = pivot::comparator(item);

        if ( comparison > 0 ) {
            smaller.push(item);
        } else {
            greater.push(item);
        }
    }

    yield * smaller::quickSort(comparator);
    yield pivot;
    yield * greater::quickSort(comparator);
};
