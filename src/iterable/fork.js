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
};
