"use strict";var h=function(t,a){return function(){return a||t((a={exports:{}}).exports,a),a.exports}};var l=h(function(w,v){"use strict";var m=require("@stdlib/assert-is-ndarray-like"),g=require("@stdlib/assert-is-array-like-object"),d=require("@stdlib/ndarray-base-broadcast-shapes"),p=require("@stdlib/ndarray-broadcast-array"),c=require("@stdlib/ndarray-shape"),o=require("@stdlib/string-format");function f(t){var a,s,e,n,i,u,r;if(s=arguments.length,s===0)e=[];else if(s>1)for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);else if(m(t))e=[t];else if(g(t))e=t;else throw new TypeError(o("invalid argument. First argument must be either an ndarray or an array of ndarrays. Value: `%s`.",t));for(u=e.length,a=[],r=0;r<u;r++)try{a.push(c(e[r]))}catch(y){throw new TypeError(o("invalid argument. An ndarray argument must be an ndarray. Value: `%s`.",e[r]))}if(i=d(a),i===null)throw new Error("invalid arguments. Input arrays must be broadcast compatible.");for(n=[],r=0;r<u;r++)n.push(p(e[r],i));return n}v.exports=f});var b=l();module.exports=b;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
