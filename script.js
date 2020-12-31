const http = require("http");
const fs = require("fs");
const requests = require("requests");
require("dotenv").config({
    path: __dirname + "/.env",
});

const htmlFile = fs.readFileSync("index.html", "utf-8");

const replaceval = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%temperature%}", orgVal.main.temp + "°C");
    temperature = temperature.replace(
        "{%temp_min%}",
        orgVal.main.temp_min + "°C"
    );
    temperature = temperature.replace(
        "{%temp_max%}",
        orgVal.main.temp_max + "°C"
    );
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
    return temperature;
};

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        requests(
                `http://api.openweathermap.org/data/2.5/weather?q=Faisalabad&appid=${process.env["WEATHER_API_TOKEN"]}`
            )
            .on("data", (chunk) => {
                const chunkStr = JSON.parse(chunk);
                const data = [chunkStr];
                const realTimeData = data
                    .map((tem) => replaceval(htmlFile, tem))
                    .join("");
                res.end(realTimeData);
            })
            .on("end", (err) => {
                if (err) return console.log("connection closed due to errors", err);
                res.end();
            });
    }
});
console.log("Name: ", process.env["NAME"]);
server.listen(8000, "127.0.0.1");