/**
 * Returns true if neither of the operands are true.
 *
 * @this {boolean} Left boolean operand.
 * @param right Right boolean operand.
 * @example Basic Usage
 *
 * ```javascript
 * true::nor(true) // false
 * true::nor(false) // false
 * false::nor(true) // false
 * false::nor(false) // true
 * ```
*/
export function nor (
    right : boolean,
) : boolean {
    return !(Boolean(this) || Boolean(right));
};
