var fs = require('fs')                 //Import Karne ke liye require function ka use karte hain
var os = require('os')

fs.writeFileSync('Test1.txt', "Hello World")
console.log('File written successfully.')

console.log('Operating System Info: ',os.platform())
console.log(os.hostname())



