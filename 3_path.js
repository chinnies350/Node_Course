
const path = require('path')

const ext = path.extname('E:\Nodejs\f1.txt')

console.log(ext)

const baseName = path.basename('E:\\Nodejs\\f1.txt')  //for the security purpose we need to put the double forward slash

console.log(baseName)

const dir = path.dirname('E:\Nodejs\f1.txt')

console.log(dir)

