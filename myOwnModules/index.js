const greeting = require('./lib/greeting');
const date = require('../dateLib/date');
const os = require('os');

let userName = os.userInfo().userName;
console.log(`Today is: ${date.currentDate}`);
console.log(greeting.getMessage(userName, date.currentDate));
