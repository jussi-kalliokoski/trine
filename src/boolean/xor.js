"use strict";

/**
 * Returns true if one and only one of the conditions is true.
 *
 * @this {boolean} Left boolean operand.
 * @param right Right boolean operand.
 * @example Basic Usage
 *
 * ```javascript
 * true::xor(true) // false
 * true::xor(false) // true
 * false::xor(true) // true
 * false::xor(false) // false
 * ```
*/
export function xor (
    right : boolean,
) : boolean {
    return Boolean(Number(this) ^ Number(right));
};
