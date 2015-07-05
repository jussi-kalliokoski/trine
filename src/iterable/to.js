/**
 * Unwraps the iterator into a collection.
 *
 * @this {Iterable<iT>}
 * @param Type The constructor for the collection type.
 * @example Arrays
 *
 * ```javascript
 * [1,2,3].map(function () {
 *   return this * 2;
 * })::to(Array) // returns [2, 4, 6]
 * ```
 *
 * @example Objects
 *
 * ```javascript
 * [{id: "a"}, {id: "b"}].map(function () {
 *   return [this.id, this];
 * })::to(Object); // returns { a: { id: "a" }, b: { id: "b"} }
 * ```
 *
 * @example Strings
 *
 * ```javascript
 * "foo".split("").reverse()::to(String) // "oof"
 *
 *
 * @example Other Collections
 *
 * ```javascript
 * [2.5, 3.5]::to(Uint16Array) // returns Uint16Array [2, 3]
 * ["foo", "bar", "foo"]::to(Set) // returns Set ["foo", "bar"]
 * [["x", "y"], ["z", "n"]]::to(Map) // returns Map { "x": "y", "z": "n" }
 * ```
*/
export function to <iT, rT> (
    Type : Function,
) : rT {
    switch ( Type ) {
        case Array:
            return [...this];
        case Object:
            return [...this].reduce((accumulation, entry) =>
                ({ ...accumulation, [entry[0]]: entry[1] }), {});
        case String:
            return [...this].join("");
        default:
            return new Type([...this]);
    }
};
