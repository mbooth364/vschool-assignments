var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8000;
var todoRoutes = require("./routes/todoRoute")
var path = require("path");
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/express-todo", require("./routes/todoRoute"));



app.listen(port, function() {
    console.log("app is listening on port: " + port);
})
