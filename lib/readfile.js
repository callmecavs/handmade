'use strict'

const fs = require('fs')

const readfile = paths => new Promise((resolve, reject) => {
  const result = {
    // these keys are used by handmade directly
    // plugins should modify but not remove them
    files: {}
  }

  let remaining = paths.length

  const check = () => {
    if (!remaining) return resolve(result)
  }

  paths.forEach(path => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) return reject(error)

      result.files[path] = data
      remaining -= 1
      check()
    })
  })
})

module.exports = readfile
