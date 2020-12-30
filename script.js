const https = require("http");
const fs = require("fs");

const htmlFile = fs.readFile("index.html", "utf-8", (err, data) => {
    err ? console.log(err) : console.log(data);
})