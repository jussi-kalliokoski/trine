"use strict";

/**
 * Forks the iterator and yields the forks.
 *
 * @this {Iterable<T>}
 * @example Basic Usage
 *
 * ```javascript
 * const source = [1,2,3]::map(function () { return this * 2});
 * const forks = source::fork();
 * const a = forks.next().value;
 * const b = forks.next().value;
 * [...a] // [1,2,3]
 * [...b] // [1,2,3]
 * ```
*/
export function * fork <T> (

) : Iterable<Iterable<T>> {
    const source = this[Symbol.iterator]();
    const indices = [];
    let buffer = [];
    let readIndex = 0;
    let done = false;

    while ( true ) {
        if ( readIndex > 0 ) {
            throw new TypeError("Can't fork the iterator after the iteration has started");
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
