const http = require('http')
const fs = require('fs')

const server = http.createServer((req, resp) => {

    fs.readFile('web.html', 'utf-8', (err, data) => {
        if (err) {
            resp.writeHead(500, { 'Content-Type': 'text/plain' })
            resp.end("File not Found")
        }

        if (req.url == "/") {
            resp.write(data)
        }
        else if (req.url == "/submit") {
            resp.write("<h1>Form Submitted Successfully</h1>")
        }
        resp.end()
    })
})
server.listen(6969)