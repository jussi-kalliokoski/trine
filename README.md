# Trine

[![Join the chat at https://gitter.im/jussi-kalliokoski/trine](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/jussi-kalliokoski/trine?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Build Status](https://travis-ci.org/jussi-kalliokoski/trine.svg?branch=master)](https://travis-ci.org/jussi-kalliokoski/trine)
[![Coverage Status](https://img.shields.io/coveralls/jussi-kalliokoski/trine.svg)](https://coveralls.io/r/jussi-kalliokoski/trine)

> A utility library for modern JavaScript.

Trine is a utility library geared at tapping the full potential of functional programming in JS, in the vein of [lodash](https://lodash.com/), [underscore](http://underscorejs.org/) and [Ramda](http://ramdajs.com/).

See the [latest docs/documentation](http://jussi-kalliokoski.github.io/trine/docs/latest) for a full API reference.

## Why?

At this point, you should be asking yourself: "why yet another utility library", and you'd be right in asking so. Ramda argues that lodash and underscore put the data in the wrong place: at the first parameter of the function, while it should be at the last position. They're both (subjectively) wrong: the natural place for data in JS is the `this` parameter.

Functional programming in JS is awkward. ES5 introduced some improvements, and ES6 introduces even more. However, even if you're writing ES6 today, you are probably still seeing code like this when attempting to write in a functional style:

```javascript
flatten(
    items
        .filter(isOk)
        .map(toOtherType)
)
```

And this is just a simple example. The data as an argument style just doesn't fit in well with the builtins of JS, and makes it hard to reason about the order of transformations. What you'd really want to do is this:

```javascript
items
    .filter(isOk)
    .map(toOtherType)
    .flatten()
```

but extending the builtin prototypes is a bad practice, even in non-library code, and has caused numerous issues with standardizing new features to builtins in JS. The [function bind syntax proposal](https://github.com/zenparsing/es-function-bind) fixes this issue. The previous example could be written as follows:

```javascript
items
    .filter(isOk)
    .map(toOtherType)
    ::flatten()
```

Much better. But that's not all. Let's imagine we had a custom `map` and `reduce` methods that passed each item as `this` to the transformer function, as well as some other helpers. This would allow us to compose using the builtins, as so:

```javascript
const characters = strings
    ::map(String.prototype.split::partial(""))
    ::reduce(Array.prototype.concat)
    .sort()
    ::uniq();
```

But why stop there? ES6 introduces the concept of iterators to JS. Iterators are a protocol that most collection types in ES6 (Map, Set, Array, etc.) implement, by exposing a function under the `Symbol.iterator` symbol. This means you can also extend your custom collection types to support the same protocol, and generator functions support it too. Iterators are a very flexible abstraction over collections, and unlike memory-bound collections, can also represent infinite sets, such as the Fibonacci series or prime numbers. In a memory-bound collection an infinite number of items would require infinite memory.

Iterators, on the other hand, allow us to process only as much as we need. So let's say we wanted to find the first 5 common items (intersection) of two infinite sets, the Fibonacci series and the prime numbers. The following is a working example of Trine, as Trine's all collection methods are actually methods for iterables:

```javascript
function * fibonacci () {
    let i0 = 1;
    let i1 = 0;

    while ( true ) {
        yield i0;
        [i0, i1] = [i0 + i1, i0];
    }
}

function * primes () {
    const primes = new Set();
    yield 1;
    yield 2;

    loop: for ( let i = 3; true; i += 2 ) {
        for ( const prime of primes ) {
            if ( i % prime === 0 ) { continue loop; }
        }

        primes.add(i)
        yield i;
    }
}

const commonItems = [fibonacci(), primes()]
    ::intersection(sub)
    ::head(5)
    ::to(Array);
console.log(commonItems); // logs [1, 2, 3, 5, 13]
```

Using iterators also allows us to easily timebox even synchronous operations. Let's say we wanted to get the 1000 first common items, but we'd be ok with less if it would block for too long:

```javascript
const deadline = Date.now() + 1000;
const commonItems = [
    fibonacci()::takeWhile(() => Date.now() < deadline),
    primes(),
]
    ::intersection(sub)
    ::head(1000)
    ::to(Array);

if ( commonItems.length < 1000 ) {
    console.error("Sorry, asked for 1000 items but got only %s :(", commonItems.length);
}

console.log(commonItems);
```

There are some other practical applications to this as well. Say we have a set of products, and we want to show a page that lists the first 15 items sorted ascending by price. If our product catalogue is prohibitively long, sorting all the items ascending by price would take too long. With iterators, however, we can perform this orders of magnitude faster than with in-memory collections. Trine ships with an implementation of the quicksort algorithm that works with iterators. Using this, we only do precise sorting for the 15 first items, as so:

```javascript
function byPrice (b) {
    return this.price - b.price;
}

const firstPageItems = products
    ::quickSort(byPrice)
    ::head(15)
    ::to(Array);
```

That's it! Most of the time you won't even have to be thinking about performance, because with iterators you can just compose the manipulations to produce the result you need and good performance will be the default. I welcome all micro-benchmarks, but doing less work will always be faster than doing more work.

### Maybe

Iterators have one more trick up their sleeve. They provide a handy way to wrap missing data, instead of implementing error handling at every turn. For example:

```javascript
function getItemPriceById (id) {
    const result = this
        ::find(function () {
            return this.id === id;
        })
        ::map(prop("price"))
        .next();

    if ( result.done ) { throw new Error("Item not found"); }
    return result.value;
}

```

## Modules

Trine has been designed to be modular and decoupled from the ground up. Each exposed function is in its own module, so for example if you're using Webpack, instead of a huge library, you will only be transferring the needed functions to the client. For example:

```javascript
import { add } from "trine/number/add";
```

Trine is also published as separate packages on npm to make the fingerprint smaller also when using node. The naming convention is using a similar scheme, except that slashes (`/`) are replaced with dots (`.`):

```
npm install --save trine.number.add
```

```javascript
import { add } from "trine.number.add";
```

This is the recommended way of using Trine.

## Installation

Trine is available on [npm](https://www.npmjs.com/):

```
npm install --save trine
```

## License

Trine is ISC licensed. See the [LICENSE](https://github.com/jussi-kalliokoski/trine/blob/master/LICENSE) document for more information.

## Contributing

The [issues](https://github.com/jussi-kalliokoski/trine/issues) are a good place to start. Whether you're having a bug or fix one, have a knack for design and want to improve the appeal of Trine, want to improve the documentation, add a test case, propose a feature or just ask for help, please do. All (friendly) contributions are welcome, as long as they're not malicious.
