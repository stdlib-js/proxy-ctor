// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=eval;var t="undefined"==typeof Proxy?null:Proxy;var e=function(){var t;try{r('"use strict"; var handler = { "get": function get( t, n ) { return t[ n ] * 100; } }; var target = { "beep": 3.14 }; var p = new Proxy( target, handler ); var x = p.beep; if ( x !== 314 ) { throw new Error( "native Proxy is not supported." ); }'),t=!0}catch(r){t=!1}return t}()?t:function(r){return r};export{e as default};
//# sourceMappingURL=mod.js.map
