// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-broadcast-shapes@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-broadcast-array@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function d(d){var o,m,a,h,l,p,j;if(0===(m=arguments.length))a=[];else if(m>1)for(a=[],j=0;j<arguments.length;j++)a.push(arguments[j]);else if(r(d))a=[d];else{if(!s(d))throw new TypeError(i("1nbFJ",d));a=d}for(p=a.length,o=[],j=0;j<p;j++)try{o.push(n(a[j]))}catch(r){throw new TypeError(i("1nbFK",a[j]))}if(null===(l=e(o)))throw new Error(i("1nbFH"));for(h=[],j=0;j<p;j++)h.push(t(a[j],l));return h}export{d as default};
//# sourceMappingURL=index.mjs.map
