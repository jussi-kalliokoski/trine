/**
 * Yields groups of elements where the first group contains the first elements
 * of all the iterators, second contains the second items and etc. until one
 * of the iterators has been exhausted.
 *
 * @this {Iterable<Iterable<T>>}
 * @ntime O(nm)
 * @dspace O(m)
 * @example Basic Usage
 *
 * ```javascript
 * [ [1,2], [4,5], [6,7] ]::zip() // yields [1,4,6], [2,5,7]
 * ```
*/

export function * zip () : Iterable<Iterable<T>> {
    const iterators = [...this].map(
        (iterable) => iterable[Symbol.iterator]()
    );

    if ( iterators.length === 0 ) { return; }

    while ( true ) {
        const zipped = [];

        for ( const iterator of iterators ) {
            const { value, done } = iterator.next();

            if ( done ) { return; }

            zipped.push(value);
        }

        yield zipped;
    }
};
