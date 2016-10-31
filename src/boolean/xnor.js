/**
 * Returns true if both operands are true or both operands are false.
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
export function xnor (
    right : boolean,
) : boolean {
    return Boolean(this) === Boolean(right);
};
