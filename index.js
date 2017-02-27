'use strict'

const flush = require('p-waterfall')

// accepts a path to the project root
// should be whatever __dirname evaluated to
const handmade = base => {
  // create the object that is waterfalled through the build
  const initial = {
    core: {
      context: base,
      files: {}
    }
  }

  // array of Promises
  // each represents a step in the build
  const tasks = []

  // create and return the instance
  // functions below are hoisted
  const instance = {
    build,
    task
  }

  return instance

  // empty the queue of tasks in sequence, passing the cumulative result of the previous tasks to the next task
  // initial object is passed to the first task
  function build () {
    // return a Promise, representing completion of the build
    // the Promise resolves an object that is the result of all steps in the build executing
    return flush(tasks, initial)
  }

  // accepts transform function(s), adds them to the queue
  function task (funcs) {
    Array.isArray(funcs)
      ? tasks.push(...funcs)
      : tasks.push(funcs)

    return this
  }
}

module.exports = handmade
