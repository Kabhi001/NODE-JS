const http = require('http')
const fs = require('fs')

const server = http.createServer((req,resp)=>{
    fs.readFile('web.html','utf-8',(err,data)=>{
        if(err)
        {
            resp.writeHead(500,{'Content-type':'text/plain'})
            resp.end("File not found");
        }
        else {
            resp.writeHead(200,{'Content-type':'text/html'})
            resp.write(data)
            resp.end()
        }
    })
})
server.listen(6969)