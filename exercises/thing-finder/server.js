var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 8000;

app.use(bodyParser.json())

var fruit = [
    {
        type: "banana",
        brand: "chiquita",
        price: 1
    },
    {
        type: "apple",
        brand: "gala",
        price: .5
    },
    {
        type: "orange",
        brand: "sunkist",
        price: .2
    }
]




app.get("/fruit", function (req, res) {
    console.log(req.query);
    var filteredFruit = [];
    if (Object.keys(req.query).length > 0) {
        for (var i = 0; i < fruit.length; i++) {
            for (var key in req.query) {
                if (fruit[i][key] === req.query[key]) {
                    filteredFruit.push(fruit[i]);
                }
            }
        }
        return res.send(filteredFruit);
    } else {
        res.send(fruit);
    }

})




app.listen(port, function () {
    console.log("app is listening on port " + port)
});