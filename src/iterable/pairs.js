"use strict";

/**
 * Yields pairs of keys and values of the bound object.
 *
 * @this {Object}
 * @ntime O(n)
 * @dspace O(n)
 * @example Basic Usage
 *
 * ```javascript
 * {a:1,b:2,c:3}::pairs()
 * }) // yields {key:'a',value:1}, {key:'b',value:2}, {key:'c',value:3} 
 * ```
*/
export function * pairs () : Iterable<Object> {
  yield* Object.keys(this).map( (key)=>{
    return {key:key,value:this[key]}; 
  });
};
