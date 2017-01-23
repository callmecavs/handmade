'use strict'

const fs = require('fs')
const path = require('path')
const flush = require('p-waterfall')

const readdir = require('./lib/readdir.js')
const readfile = require('./lib/readfile.js')

const handmade = dir => {
  // array of Promises
  const queue = []

  // store base for all paths, use it to keep paths relative
  const context = dir

  // create and return the instance
  // functions below are hoisted
  const instance = {
    read,
    write,
    make
  }

  return instance

  // accepts a path to the source files
  // returns an object of path -> content pairs
  // keys and values are just strings
  function read (to) {
    queue.push(() => readdir(context, to))
    queue.push(readfile)
    return this
  }

  // accepts a path to the destination
  // everything is deleted, and the new contents are written
  function write (to) {

    return this
  }

  // empty the queue of Promises in sequence,
  // passing the result of the previous one to the next one
  // return a Promise for chaining
  function make() {
    return flush(queue)
  }
}

module.exports = handmade
