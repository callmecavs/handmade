'use strict'

// must accept the build contents object
// must return a Promise
const task = contents => new Promise((resolve, reject) => {
  // access the fileset via the contents object
  const { files } = contents.core

  // remember to resolve the transformed contents object
  // remember to include the contents you didnt modify
  resolve(contents)
})

module.exports = task
