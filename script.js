const http = require("http");
const fs = require("fs");
const requests = require("requests");
const htmlFile = fs.readFile("index.html", "utf-8", (err, data) => {
    data
})

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests('http://api.openweathermap.org/data/2.5/weather?q=Faisalabad&appid=7da15472ac24b241a11f8149cc41b651')
            .on('data', (chunk) => {
                const chunkStr = JSON.parse(chunk);
                console.log(chunkStr);
                res.end(chunk)
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);
                console.log('end');
            });
        console.log(htmlFile);
    }
})

server.listen(8000, "127.0.0.1")