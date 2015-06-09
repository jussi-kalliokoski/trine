"use strict";

/**
 * Returns true if either of the operands is true.
 *
 * @this {boolean} Left boolean operand.
 * @param right Right boolean operand.
 * @example Basic Usage
 *
 * ```javascript
 * true::or(true) // true
 * true::or(false) // true
 * false::or(true) // true
 * false::or(false) // false
 * ```
*/
export function or (
    right : boolean,
) : boolean {
    return this || right;
};
