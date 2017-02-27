# handmade

[![handmade on NPM](https://img.shields.io/npm/v/handmade.svg?style=flat-square)](https://www.npmjs.com/package/handmade) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

DIY build systems, tooling, and more.

* **Small.** The API is just 2 methods!
* **Simple.** A task is just a function that returns a Promise.
* **Custom.** Write your own tasks.
* **Easy.** Use tasks contributed by the community.
* **Accessible.** Tasks are just functions. No complex plugin architecture or file system.
* **Funky.** Functions to the core. Functional in nature.

## Getting Started

1. [Install](#install)
2. [First Build](#first-build)
3. [Review Tasks](#tasks)

## Install

```sh
# via npm
$ npm i handmade --save

# via yarn
$ yarn add handmade
```

## First Build

So, you want to give it a shot?

```javascript
// import handmade
const handmade = require('handmade')

// import read/write tasks
const {
  read,
  write
} = require('handmade-fs')

// define a custom task
const task = contents => new Promise((resolve, reject) => {
  // do work here, sync or async
  console.log('Heavy lifting.')

  // when done, resolve and pass everything along
  resolve(contents)
})

// kick off a new build, passing a path to the root of your project
handmade(__dirname)
  // point it to your source files
  .add(read('./input'))

  // add your tasks
  .add(task)

  // point it to where the output should go
  .add(write('./output'))

  // kick off the build
  .build()

  // do more with the result of the build, if you want to
  .then(result => {

  })

  // prepare a backup plan
  .catch(error => {

  })
```

## Tasks

A task is a function that manipulates the source.

* [Empty Task](https://github.com/callmecavs/handmade/blob/master/examples/empty-task.js) - The concept explained through boilerplate code.
* [Curried Task](https://github.com/callmecavs/handmade/blob/master/examples/curried-task.js) - Use currying to make tasks that accept options.

## See Also

* [handmade-fs](https://github.com/callmecavs/handmade-fs) - File system tasks for [handmade](https://github.com/callmecavs/handmade).

## Linting

[![JS Standard Style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
