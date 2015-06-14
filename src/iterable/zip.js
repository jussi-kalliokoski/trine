"use strict";

import {map} from './map'

/**
 * unpacks an Iterable of Iterables and yields an array of items
 *
 * @this {Iterable<any>}
 * @ntime O(n)
 * @dspace O(n)
 * @example Basic Usage
 *
 * ```javascript
 * [ [1,2,3] , [4,5], [6,7] ]::zip() yields  [1,4,6] , [2,4,7]
 * ```
*/

function generatorify(){
    if( Array.isArray(this) ) {
        return this[Symbol.iterator]();
    }
    return this;
}

export function * zip  () : Iterable<any> {
  let iterators = [...this::map(generatorify)];
  do {
        let zipped=[];
        for(let iter of iterators) {
          let obj = iter.next();
          if( obj.done ) { return; }
          zipped.push(obj.value);
        }
        yield zipped;
    } while(true);
};
