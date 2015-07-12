/**
 * unpacks an Iterable of Iterables and yields an array of items
 *
 * @this {Iterable<Iterable<T>>}
 * @ntime O(nm)
 * @dspace O(m)
 * @example Basic Usage
 *
 * ```javascript
 * [ [1,2,3] , [4,5], [6,7] ]::zip() yields  [1,4,6] , [2,4,7]
 * ```
*/

export function * zip  () : Iterable<any> {
    let iterators = [...this].map(
        (iterable) => iterable[Symbol.iterator]()
    );
    if ( iterators.length == 0 ) { return; }
    while ( true ) {
        let zipped = [];
        for ( let iterator of iterators ) {
            const { value, done } = iterator.next();
            if ( done ) { return; }
            zipped.push(value);
        }
        yield zipped;
    }
};
