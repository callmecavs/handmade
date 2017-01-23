'use strict'

const mkdirp = require('mkdirp')
const path = require('path')

const mkdir = (context, from, to) => contents => new Promise((resolve, reject) => {
  // stores the updated contents
  const cleaned = {}

  Object
    .keys(contents)
    .forEach(key => {
      // make the path relative to the context
      const stripped = key.replace(path.resolve(context, from), '')

      // add the new beginning of the path
      const updated = `${path.resolve(context, to)}${stripped}`

      // add new path -> content pair
      cleaned[updated] = contents[key]
    })

  const paths = Object.keys(cleaned)

  let remaining = paths.length

  const check = () => {
    if (!remaining) return resolve(cleaned)
  }

  paths.forEach(path => {
    // remove file name and extension from the path of folder to create
    const updated = path
      .split('/')
      .slice(0, -1)
      .join('/')

    mkdirp(updated, error => {
      if (error) return reject()

      remaining -= 1
      check()
    })
  })
})

module.exports = mkdir
