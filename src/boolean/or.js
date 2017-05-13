/**
 * Returns true if either operand is true.
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
    return Boolean(this) || Boolean(right);
};
