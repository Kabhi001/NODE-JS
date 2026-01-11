//input field se data kaise receive karoge to ye ha code an also how to make dynamic port number from command line 
const http = require('http')
const arg = process.argv
const port = arg[2]

const server = http.createServer((req,resp)=>{
    resp.write(`<h1>Server is running on port number ${port}</h1>`)
    resp.end()
})
server.listen(port)


