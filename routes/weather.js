// routes/weather.js
const express = require("express");
const router = express.Router();
const request = require("request");

// GET /weather
router.get('/', function(req, res, next) {

    let apiKey = process.env.WEATHER_API_KEY; // <--- Safer than hardcoding
    let city = "london";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

    request(url, function (err, response, body) {
        if(err){
            next(err)
        } else {
            // res.send(body);

            var weather = JSON.parse(body);

            var wmsg = "It is " + weather.main.temp +
                " degrees in " + weather.name +
                "! <br> The humidity now is: " +
                weather.main.humidity;

            res.send(wmsg);
        }
    });
});

module.exports = router;