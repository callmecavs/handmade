# handmade

[![handmade on NPM](https://img.shields.io/npm/v/handmade.svg?style=flat-square)](https://www.npmjs.com/package/handmade) [![handmade on Travis](https://img.shields.io/travis/callmecavs/handmade.svg?style=flat-square)](https://travis-ci.org/callmecavs/handmade) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/) [![handmade Stability Index](https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square)](https://nodejs.org/api/documentation.html#documentation_stability_index)

DIY build systems, tooling, and more.

* **Small.** The API is just 2 methods.
* **Simple.** A task is just a function that returns a Promise.
* **Familiar.** Easily write your own tasks using node and the ecosystem.
* **Accessible.** No complex plugin architecture or file handling.
* **Fluid.** Functions to the core. Functional in nature.

## Getting Started

1. [Install](#install)
2. [Review Tasks](#tasks)
3. [First Build](#first-build)

## Install

```sh
# via npm
$ npm i handmade --save

# via yarn
$ yarn add handmade
```

## Tasks

A task is a function that manipulates the build object.

handmade is a [waterfall](https://github.com/sindresorhus/p-waterfall) under the hood - a build runs all tasks in series, passing the same build object to each one.

See the example code below (thoroughly commented):

* [Empty Task](https://github.com/callmecavs/handmade/blob/master/examples/empty-task.js) - A task that does nothing.
* [Curried Task](https://github.com/callmecavs/handmade/blob/master/examples/curried-task.js) - A task that accepts options via currying.

## First Build

Give this example a look. If you want to work with the filesystem, it's this simple:

```javascript
// import handmade
const handmade = require('handmade')

// import fs read/write tasks
const {
  read,
  write
} = require('handmade-fs')

// define a custom task that has access to file data
const customTask = contents => new Promise((resolve, reject) => {
  // destructure file data from contents
  let { files } = contents.core

  // do work here, sync or async, using the file data
  // files is an object of file paths -> file contents
  console.log(files)

  // when done, resolve and pass along the contents object
  resolve(contents)
})

// kick off a new build, passing a path to the root of your project
handmade(__dirname)
  // point it to your source files
  .task(read('./input'))

  // add your custom task
  .task(customTask)

  // point it to where the output should go
  .task(write('./output'))

  // kick off the build
  .build()

  // do more with the result of the build, if you want to
  .then(result => {

  })

  // when shit blows up
  .catch(error => {

  })
```

## See Also

* [handmade-fs](https://github.com/callmecavs/handmade-fs) - File system tasks for [handmade](https://github.com/callmecavs/handmade).

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
