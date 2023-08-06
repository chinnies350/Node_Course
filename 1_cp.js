// chicld process is a node module which is used to create a sub process within a script
// you can perform different tasks with your script by just using some method

const cp = require('child_process')

// cp.execSync('calc')

// cp.execSync('start chrome https://www.scaler.com/topics/course/nodejs/video/973/')

console.log('Output' + cp.execSync('node demo.js'))