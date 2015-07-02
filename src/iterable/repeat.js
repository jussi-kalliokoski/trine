/**
 * Indefinitely repeat the values of a given iterator.
 *
 * @this {Iterable<T>}
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::repeat(); // yields [1,2,3,1,2,3...]
 * ```
*/
export function * repeat <T> (

) : Iterable<T> {
    let iterator = this[Symbol.iterator]();

    while ( true ) {
        const { value, done } = iterator.next();

        if ( done ) {
            // Start the iterator over again once done.
            iterator = this[Symbol.iterator]();
        } else {
            yield value;
        }
    }
};
