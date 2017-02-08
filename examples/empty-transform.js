'use strict'

// must accept the build contents object
// must return a Promise
const transform = contents => new Promise((resolve, reject) => {
  // the fileset is stored in contents.files, an object of paths -> contents
  console.log(contents.files)

  // remember to resolve the transformed contents object
  // remember to include the contents you didnt modify
  resolve(contents)
})

module.exports = transform
