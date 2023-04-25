console.log("Hello, world!");
const moment = require('moment');
const timestamp = moment().format('h:mm:ss a');
console.log(`Response arrived at ${timestamp}`);