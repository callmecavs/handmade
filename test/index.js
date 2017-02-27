'use strict'

/* eslint-env mocha */

const assert = require('chai').assert
const path = require('path')

const handmade = require('../index.js')

const {
  read,
  write
} = require('handmade-fs')

const empty = require('../examples/empty-task.js')

handmade(__dirname)
  .add(read('./input'))
  .add(empty)
  .add(write('./output'))
  .build()
  .then(result => console.log(result))
  .catch(error => console.log(error))
