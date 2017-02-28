'use strict'

// via currying, your task can accept options and other parameters
// in functional form, the contents object ought to be passed in last
const task = (options = {}) => contents => new Promise((resolve, reject) => {

})

module.exports = task
