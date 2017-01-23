'use strict'

const del = require('del')
const path = require('path')

const clean = (context, to) => contents => new Promise((resolve, reject) => {
  const glob = `${path.resolve(context, to)}/**`

  del(glob)
    .then(() => resolve(contents))
    .catch(reject)
})

module.exports = clean
