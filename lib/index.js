/**
 * @fileoverview Disallowes german umlauts in funtion names, variable names and object properties
 * @author Nils Neumann
 * @copyright 2016 Nils Neumann. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


module.exports = {
  rules: {
    "no-umlauts": require('./rules/no-umlauts.js'),
    "custom": require('./rules/custom.js')
  },
  rulesConfig: {
    "no-umlauts": [2, {
      disallow: [ 'ä', 'ü', 'ö' ]
    } ],
    "custom": [2, {
      disallow: ['ß']
    }]
  }
};
