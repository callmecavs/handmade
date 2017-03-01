'use strict'

/* eslint-env mocha */

const assert = require('chai').assert
const path = require('path')

const handmade = require('../')

const CONTEXT = __dirname

const EXPECTED = {
  core: {
    context: CONTEXT,
    files: {}
  }
}

const syncTask = contents => Promise.resolve(contents)
const asyncTask = contents => new Promise(resolve => setTimeout(() => resolve(contents), 100))

describe('handmade', () => {
  it('should build without tasks', done => {
    handmade(CONTEXT)
      .build()
      .then(result => {
        assert.deepEqual(result, EXPECTED)
        done()
      })
      .catch(error => console.log(error))
  })

  it('should build with sync tasks', done => {
    handmade(CONTEXT)
      .task(syncTask)
      .build()
      .then(result => {
        assert.deepEqual(result, EXPECTED)
        done()
      })
      .catch(error => console.log(error))
  })

  it('should build with async tasks', done => {
    handmade(CONTEXT)
      .task(asyncTask)
      .build()
      .then(result => {
        assert.deepEqual(result, EXPECTED)
        done()
      })
      .catch(error => console.log(error))
  })

  it('should build with multiple tasks (sync and/or async)', done => {
    handmade(CONTEXT)
      .task(syncTask)
      .task(asyncTask)
      .build()
      .then(result => {
        assert.deepEqual(result, EXPECTED)
        done()
      })
      .catch(error => console.log(error))
  })
})
