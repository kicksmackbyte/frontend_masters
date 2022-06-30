Why Webpack?
============

History of Web Performance + JavaScript
---------------------------------------
In-line javascript or download scripts or load scripts
Browser can only have so many concurrent requests

Single giant javascript file is unmaintainable

IIFE are used to namespace/limit scope

Make/grunt/gulp were used to build entire file outta smaller files using IIFEs
    - problem cuz it would rebuild the whole file
    - a lotta code was dead code


CommonJS module format is what lets us use `require`

    // index.js
    const path = require('path');
    const {add, sub} = require("./math");

    const sum  = add(5, 5);
    const diff = sub(10, 4);

    console.log(sum, diff);


    // math.js
    const divFn = require('./division');

    exports.add = (first, secod) => first + second;
    exports.sub = (first, second) => first - second;
    exports.div = divFn;


    // division.js
    module.exports = (first, second) => first/second;


No browser support for CommonJS
No live bindings
    - problems with cyclical dependencies


AMD module pattern (don't use this)
ESM - ECMA Script Modules

    import {uniq, forOf, bar} from 'lodash-es'
    import * as utils from 'utils';

    export const uniqConst = uniq([1, 2, 2, 4]);


Webpack is a module bundler
    - lets you write any module format
    - compiles module for browser
    - supports static async bundling
    - most performant way to ship javascript


Can configure webpack using...
    - webpack.config
    - webpack CLI
    - node API


Webpack from Scratch
====================

webpack.config requires an `entry` and `output` configuration
    - by default `entry: src/index.js` and `output: dist/main.js`

package.json
    ...
    "scripts": {
        "webpack": "webpack",
        "dev": "npm run webpack -- --mode development",
        "debugThis": "node --inspect --inspect-brk ./src/index.js",
    }
    ...


The Core Concepts
=================


Using Plugins
================
