/**
 * Returns the identity of the boolean.
 *
 * @this {boolean} The boolean.
 * @example Basic Usage
 *
 * ```javascript
 * true::identity() // true
 * false::identity() // false
 * ```
*/
export function identity (

) : boolean {
    return Boolean(this);
};
