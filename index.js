'use strict'

const fs = require('fs')
const path = require('path')

const handmade = dir => {
  // store base for all paths, use it to keep paths relative
  const context = dir

  // create and return the instance
  // functions below are hoisted
  const instance = {
    read,
    write
  }

  return instance

  // accepts a path to the source files
  // returns an object of path -> content pairs
  // keys and values are just strings
  function read (to) {

    return this
  }

  // accepts a path to the destination
  // everything is deleted, and the new contents are written
  function write (to) {

    return this
  }
}

module.exports = handmade
