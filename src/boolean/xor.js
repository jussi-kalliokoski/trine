/**
 * Returns true if and only if one operand is true.
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
    return Boolean(this) !== Boolean(right);
};
