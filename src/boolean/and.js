/**
 * Returns true if both operands are true.
 *
 * @this {boolean} Left boolean operand.
 * @param right Right boolean operand.
 * @example Basic Usage
 *
 * ```javascript
 * true::and(true) // true
 * true::and(false) // false
 * false::and(true) // false
 * false::and(false) // false
 * ```
*/
export function and (
    right : boolean,
) : boolean {
    return Boolean(this) && Boolean(right);
};
