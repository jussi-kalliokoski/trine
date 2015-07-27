/**
 * Yields forks of the original iterator, caching the items as needed.
 *
 * @this {Iterable<T>}
 * @example Basic Usage
 *
 * ```javascript
 * const source = [1,2,3]::map(function () { return this * 2});
 * const forks = source::tee();
 * const a = forks.next().value;
 * const b = forks.next().value;
 * [...a] // [1,2,3]
 * [...b] // [1,2,3]
 * ```
*/
export function * tee <T> (

) : Iterable<Iterable<T>> {
    const source = this[Symbol.iterator]();
    const indices = [];
    let buffer = [];
    let readIndex = 0;
    let done = false;

    while ( true ) {
        if ( readIndex > 0 ) {
            throw new TypeError("Can't tee the iterator after the iteration has started");
        }

        const iteratorIndex = indices.length;
        indices.push(0);

        yield function * () {
            while ( true ) {
                const offset = indices[iteratorIndex] - readIndex;

                if ( offset < 0 ) {
                    indices[iteratorIndex] = readIndex;
                    const chunk = buffer.slice(offset);
                    const lowestOffset = Math.min(...indices) - readIndex;

                    if ( lowestOffset < 0 ) {
                        buffer = buffer.slice(lowestOffset);
                    } else {
                        buffer = [];
                    }

                    yield * chunk;
                    continue;
                }

                if ( done ) { return; }

                const step = source.next();
                done = step.done;

                if ( done ) { return; }

                buffer.push(step.value);
                readIndex += 1;
            }
        }();
    }
};
