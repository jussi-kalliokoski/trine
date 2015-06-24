/**
 * Returns the n-th power of the number.
 *
 * @this {number}
 * @example Basic Usage
 *
 * ```javascript
 * 2::pow(0) // returns 1
 * 2::pow(1) // returns 2
 * 2::pow(2) // returns 4
 * 4::pow(0.5) // returns 2
 * ```
*/
export function pow (
    n : number,
) : number {
    return this ** n;
};
