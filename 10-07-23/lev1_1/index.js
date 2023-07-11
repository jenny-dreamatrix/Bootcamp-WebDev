import http from 'http'
import fs from "node:fs"

const sendFile = (path, res, code) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            res.writeHead(500)
            res.end()
            return
        }

        res.write(data)
        res.end()
    })
}

const requestHandler = (req, res) => {
    if(req.url === '/'){
        sendFile('./index.html', res)
    } else {
        sendFile(`.${req.url}`, res)
    }
}

const server = http.createServer(requestHandler)
server.listen(9898, () => {console.log("Ich bin ready")})