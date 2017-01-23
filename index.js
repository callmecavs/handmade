'use strict'

const flush = require('p-waterfall')

const clean = require('./lib/clean.js')
const mkdir = require('./lib/mkdir.js')
const readdir = require('./lib/readdir.js')
const readfile = require('./lib/readfile.js')
const writefile = require('./lib/writefile.js')

const handmade = dir => {
  let from

  // array of Promises
  const queue = []

  // store base for all paths, use it to keep paths relative
  const context = dir

  // create and return the instance
  // functions below are hoisted
  const instance = {
    build,
    read,
    transform,
    write
  }

  return instance

  // empty the queue of Promises in sequence,
  // passing the result of the previous one to the next one
  // return a Promise for chaining
  function build () {
    return flush(queue)
  }

  // accepts a path to the source files
  function read (to) {
    from = to

    // add read-related tasks to the queue
    queue.push(() => readdir(context, to))
    queue.push(readfile)

    return this
  }

  // accepts a transform function
  function transform (fx) {
    // add task function to the queue
    queue.push(fx)

    return this
  }

  // accepts a path to the destination
  function write (to) {
    // add task to empty the destination directory
    queue.push(clean(context, to))

    // add write-related tasks to the queue
    queue.push(mkdir(context, from, to))
    queue.push(writefile)

    return this
  }
}

module.exports = handmade
