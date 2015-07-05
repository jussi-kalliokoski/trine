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
    const items = [...this];

    while ( true ) {
        yield * items;
    }
};
