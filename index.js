'use strict'

const flush = require('p-waterfall')

const clean = require('./lib/clean.js')
const mkdir = require('./lib/mkdir.js')
const readdir = require('./lib/readdir.js')
const readfile = require('./lib/readfile.js')
const writefile = require('./lib/writefile.js')

// accepts a path to the project root
// should be whatever __dirname evaluated to
const handmade = base => {
  // cache for the read path
  let from

  // array of Promises
  // each represents a step in the build
  const tasks = []

  // create and return the instance
  // functions below are hoisted
  const instance = {
    build,
    read,
    transform,
    write
  }

  return instance

  // empty the queue of tasks in sequence,
  // passing the result of the previous one to the next one
  function build () {
    // return a Promise, representing completion of the build
    return flush(tasks)
  }

  // accepts a path to the source files
  function read (to) {
    from = to

    // add read-related tasks to the queue
    tasks.push(() => readdir(base, to))
    tasks.push(readfile)

    return this
  }

  // accepts a transform function, or array of transform functions
  function transform (funcs) {
    // add task function(s) to the queue
    Array.isArray(funcs)
      ? tasks.push(...funcs)
      : tasks.push(func)

    return this
  }

  // accepts a path to the destination
  function write (to) {
    // add task to empty the destination directory
    tasks.push(clean(base, to))

    // add write-related tasks to the queue
    tasks.push(mkdir(base, from, to))
    tasks.push(writefile)

    return this
  }
}

module.exports = handmade
