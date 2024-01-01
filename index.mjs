// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-broadcast-shapes@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-broadcast-array@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function i(i){var d,m,o,l,h,p,j;if(0===(m=arguments.length))o=[];else if(m>1)for(o=[],j=0;j<arguments.length;j++)o.push(arguments[j]);else if(r(i))o=[i];else{if(!s(i))throw new TypeError(n("invalid argument. First argument must be either an ndarray or an array of ndarrays. Value: `%s`.",i));o=i}for(p=o.length,d=[],j=0;j<p;j++)try{d.push(a(o[j]))}catch(r){throw new TypeError(n("invalid argument. An ndarray argument must be an ndarray. Value: `%s`.",o[j]))}if(null===(h=e(d)))throw new Error("invalid arguments. Input arrays must be broadcast compatible.");for(l=[],j=0;j<p;j++)l.push(t(o[j],h));return l}export{i as default};
//# sourceMappingURL=index.mjs.map
