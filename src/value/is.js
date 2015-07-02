/**
 * Determine if the bound value is the same as the specified value.
 *
 * @this {any}
 * @param value The value to compare the bound value to.
 * @example Basic Usage
 *
 * ```javascript
 * "foo"::is("foo") // true
 * "foo"::is("bar") // false
 * ```
*/
export function is (
    value : any,
) : boolean {
    return Object.is(this, value);
};
