<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Proxy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Proxy][mdn-proxy] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
Proxy = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/proxy-ctor@umd/bundle.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/proxy-ctor@umd/bundle.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.Proxy;
})();
</script>
```

#### Proxy( target, handlers )

Returns a [proxy][mdn-proxy] object implementing custom behavior for specified object operations.

```javascript
function get( target, property ) {
    return target[ property ] * 2.0;
}

var handlers = {
    'get': get
};

var p = new Proxy( {}, handlers );

p.a = 3.14;

var v = p.a;
// returns 6.28
```

A `handlers` argument should be an `object` whose properties are functions (called "**traps**") which define the behavior of the proxy when performing operations. The following traps are supported:

-   `getPrototypeOf( target )`

    -   Trap for `Object.getPrototypeOf()`. Can be used to intercept the `instanceof` operator. The method must return an `object` or `null`.

-   `setPrototypeOf( target, prototype )`

    -   Trap for `Object.setPrototypeOf()`. The method must return a `boolean` indicating if the prototype was successfully set.

-   `isExtensible( target )`

    -   Trap for `Object.isExtensible()`. The method must return a `boolean`.

-   `preventExtensions( target )`

    -   Trap for `Object.preventExtensions()`. The method must return a `boolean`.

-   `getOwnPropertyDescriptor( target, property )`

    -   Trap for `Object.getOwnPropertyDescriptor()`. The method must return an `object` or `undefined`.

-   `defineProperty( target, property, descriptor )`

    -   Trap for `Object.defineProperty()`. The method must return a `boolean` indicating whether the operation succeeded.

-   `has( target, property )`

    -   Trap for the `in` operator. The method must return a `boolean`.

-   `get( target, property, receiver )`

    -   Trap for retrieving property values. The method can return any value.

-   `set( target, property, value, receiver )`

    -   Trap for setting property values. The method should return a `boolean` indicating whether assignment succeeded.

-   `deleteProperty( target, property )`

    -   Trap for the `delete` operator. The method must return a `boolean` indicating whether operation succeeded.

-   `ownKeys( target )`

    -   Trap for `Object.keys`, `Object.getOwnPropertyNames()`, and `Object.getOwnPropertySymbols()`. The method must return an enumerable `object`.

-   `apply( target, thisArg, argumentsList )`

    -   Trap for a function call. The method can return any value.

-   `construct( target, argumentsList, newTarget )`

    -   Trap for the `new` operator. The method must return an `object`.

All traps are **optional**. If a trap is not defined, the default behavior is to forward the operation to the target.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/proxy-ctor@umd/bundle.js"></script>
<script type="text/javascript">
(function () {

var handlers;
var arr;
var p;
var i;

// Create a new typed array:
arr = new Float64Array( 10 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = i;
}

// Define a "trap" when retrieving property values:
function get( obj, prop ) {
    if ( prop === 'length' ) {
        return obj.length;
    }
    return obj[ prop ] * 2.0;
}

// Define the proxy handlers:
handlers = {
    'get': get
};

// Create a proxy:
p = new Proxy( arr, handlers );

// Access array values...
for ( i = 0; i < p.length; i++ ) {
    console.log( 'arr[%d] = %d', i, p[ i ] );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/proxy-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/proxy-ctor

[test-image]: https://github.com/stdlib-js/proxy-ctor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/proxy-ctor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/proxy-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/proxy-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/proxy-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/proxy-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/proxy-ctor/tree/deno
[umd-url]: https://github.com/stdlib-js/proxy-ctor/tree/umd
[esm-url]: https://github.com/stdlib-js/proxy-ctor/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/proxy-ctor/main/LICENSE

[mdn-proxy]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

</section>

<!-- /.links -->
