'use strict'

// via currying, your transform can accept multiple parameters
// in functional form, data ought to be passed in as the last parameter
const transform = (options = {}) => content => new Promise((resolve, reject) => {

})

module.exports = curriedTransform
