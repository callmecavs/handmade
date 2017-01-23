# handmade

[![handmade on NPM](https://img.shields.io/npm/v/handmade.svg?style=flat-square)](https://www.npmjs.com/package/handmade) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

DIY static site generation, build systems, tooling, and more.

* **Small.** The API is just 3 methods!
* **Simple.** A task is just a function that returns a Promise.
* **Custom.** Write your own tasks.
* **Easy.** Use tasks contributed by the community.
* **Funky.** Functions to the core. Functional in nature.

## Getting Started

1. [Install](#install)
2. [First Build](#first-build)
3. [Review Transforms](#transforms)
4. [Review Plugins](#plugins)
5. [Review Presets](#presets)

## Install

```bash
# via npm
$ npm i handmade --save

# via yarn
$ yarn add handmade
```

## First Build

So, you want to give it a shot?

```es6
// import handmade
const handmade = require('handmade')

// define a transform
const example = contents => new Promise((resolve, reject) => {
  // do work here
  console.log('Heavy lifting.')

  // when done, pass everything along
  resolve(contents)
})

// kick off a new build, by passing in the root of your project (usually __dirname)
handmade(__dirname)
  // point it to your source files
  .read('./input')

  // apply your transforms
  .transform(example)

  // tell it where the output should go
  .write('./output')

  // kick off the build
  .build()

  // do other stuff (only if you want to)
  .then(() => {

  })

  // have a backup plan (unless you write perfect code)
  .catch(error => {

  })
```

## Transforms

A transform is a function that manipulates the source.

### Example Code

* [Empty Transform](https://github.com/callmecavs/handmade/blob/master/examples/empty-transform.js) - The concept explained through boilerplate code.
* [Curried Transform](https://github.com/callmecavs/handmade/blob/master/examples/curried-transform.js) - Use currying to make transforms that accept options.

## Plugins

A plugin is a group of [transforms](#transforms).

## Presets

Presets are groups of [plugins](#plugins).

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
