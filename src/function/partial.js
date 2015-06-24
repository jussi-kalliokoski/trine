/**
 * Used for partial application to denote that this slot expects an
 * argument from the resulting function's calls.
*/
export const _ = Symbol("placeholder");

/**
 * Used for partial application to denote that this slot expects zero or
 * more arguments from the resulting function's calls.
*/
export const ___ = Symbol("rest placeholder");

function countPlaceholders () {
    return this.filter((param) => param === _).length;
}

function flatMap (transformer) {
    return [].concat.apply([], this.map(transformer));
}

/**
 * Returns a version of the function that has given parameters prefilled and passes given parameters through to the original,
 * denoted by placeholders.
 *
 * @this {T}
 * @param ...staticParams The prefilled parameters.
 * @example Unary `parseInt`
 *
 * ```javascript
 * parseInt::partial(_)("10", 2) // 10
 * ```
 *
 * @example Hexadecimal `parseInt`
 *
 * ```javascript
 * parseInt::partial(_, 16)("10") // 16
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
export function partial <T> (...staticParams : any) : T {
    const delegate = this;
    const restIndex = staticParams.indexOf(___);
    const placeholdersAfterRest = staticParams
        .slice(restIndex === -1 ? staticParams.length : restIndex + 1)
        ::countPlaceholders();

    if ( staticParams.indexOf(___, restIndex + 1) !== -1 ) {
        throw new TypeError("You can only pass one rest placeholder to partial.");
    }

    return function (...params) {
        const passedParams = staticParams::flatMap((param, index) => {
            if ( param === _ ) {
                if ( params.length > 0 ) {
                    return [params.shift()];
                }
            } else if ( param === ___ ) {
                if ( params.length > placeholdersAfterRest ) {
                    return params.splice(0, params.length - placeholdersAfterRest);
                }
            } else {
                return [param];
            }

            return [];
        });

        return delegate.apply(this, passedParams);
    };
};
