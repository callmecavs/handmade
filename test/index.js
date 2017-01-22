'use strict'

/* eslint-env mocha */

const assert = require('chai').assert
const path = require('path')

const handmade = require('../index.js')

handmade(__dirname)
  .read('./folder')
  .then(() => console.log('done'))
