"use strict"

/**
 * Returns a version of the function that has given parameters prefilled and passes given parameters through to the original, denoted by placeholders.
 *
 * @example Unary <code>parseInt</code>
 *
 * ```javascript
 * parseInt
 * ```
 *
 * @example Hexadecimal <code>parseInt</code>
 *
 * ```javascript
 * parseInt
 * ```
 *
 * @example Fill Only the Second Argument
 *
 * ```javascript
 * function foo (a, b, c, d) {
 *   console.log(a, b, c, d);
 * }
 *
 * foo::partial(_, 2, ___)(1, 3, 4) // logs "1 2 3 4"
 * ```
 *
 * @example Fill Only the Second Last Argument
 *
 * ```javascript
 * function foo (a, b, c, d) {
 *   console.log(a, b, c, d);
 * }
 *
 * foo::partial(___, 3, _)(1, 2, 4) // logs "1 2 3 4"
 * ```
 *
 * @example Compose a Prototype Method
 *
 * ```javascript
 * const slice1 = Array.prototype.slice::partial(1, ___);
 * [1, 2, 3, 4]::slice1() // [2, 3, 4]
 * ```
*/
export function partial (
) {
};
