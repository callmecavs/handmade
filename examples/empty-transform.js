'use strict'

// a valid transform is simply a function that returns a Promise
// a contents parameter is passed in (path -> content pairs)
const transform = contents => new Promise((resolve, reject) => {
  // remember to resolve the transformed contents object
  // remember to include the contents you didnt modify
  resolve(contents)
})

module.exports = transform
