/**
 * Returns true if neither of the operands are true.
 *
 * @this {boolean} Left boolean operand.
 * @param right Right boolean operand.
 * @example Basic Usage
 *
 * ```javascript
 * true::or(true) // false
 * true::or(false) // false
 * false::or(true) // false
 * false::or(false) // true
 * ```
*/
export function nor (
    right : boolean,
) : boolean {
    return !(Boolean(this) || Boolean(right));
};
