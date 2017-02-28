'use strict'

// a task must accept the build contents object
// a task must return a Promise
const task = contents => new Promise((resolve, reject) => {
  // optionally, work with data added by the handmade core or previous tasks in the build
  let { core } = contents

  // when done working with the contents object, remeber to resolve both
  // the contents modified by your task, and the contents you didn't touch
  resolve(contents)
})

module.exports = task
