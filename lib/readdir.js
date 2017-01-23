'use strict'

const fs = require('fs')
const path = require('path')

// FIXME: add commenting

const readDir = (context, to) => new Promise((resolve, reject) => {
  const result = []
  const start = path.resolve(context, to)

  fs.readdir(start, (error, items) => {
    if (error) return reject(error)

    let remaining = items.length

    const check = () => {
      if (!remaining) return resolve(result)
    }

    const update = add => {
      Array.isArray(add)
        ? result.push(...add)
        : result.push(add)

      remaining -= 1
      check()
    }

    check()

    items.forEach(item => {
      const sub = path.resolve(start, item)

      fs.stat(sub, (error, detail) => {
        if (error) return reject(error)

        detail.isDirectory()
          ? readDir(context, sub).then(update).catch(reject)
          : update(sub)
      })
    })
  })
})


module.exports = readDir
