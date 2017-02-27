'use strict'

/* eslint-env mocha */

const assert = require('chai').assert
const path = require('path')

const handmade = require('../index.js')

const emptyTransform = require('../examples/empty-transform.js')

handmade(__dirname)
  .add(read('./input'))
  .add(emptyTransform)
  .add(write('./output'))
  .build()
  .then(result => console.log(result))
  .catch(error => console.log(error))
