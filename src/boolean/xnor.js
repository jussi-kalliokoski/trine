/**
 * Returns true if both operands are true or both operands are false.
 *
 * @this {boolean} Left boolean operand.
 * @param right Right boolean operand.
 * @example Basic Usage
 *
 * ```javascript
 * true::xnor(true) // false
 * true::xnor(false) // true
 * false::xnor(true) // true
 * false::xnor(false) // false
 * ```
*/
export function xnor (
    right : boolean,
) : boolean {
    return Boolean(this) === Boolean(right);
};
