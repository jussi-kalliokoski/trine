/**
 * Returns true if both operands are not true.
 *
 * @this {boolean} Left boolean operand.
 * @param right Right boolean operand.
 * @example Basic Usage
 *
 * ```javascript
 * true::nand(true) // false
 * true::nand(false) // true
 * false::nand(true) // true
 * false::nand(false) // true
 * ```
*/
export function nand (
    right : boolean,
) : boolean {
    return !(Boolean(this) && Boolean(right));
};
