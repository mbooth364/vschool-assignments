var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//var uuid = require("uuid");
var bountyRoutes = require("./bountyRoute")
var path = require("path");
var port = 8000;
var mongoose = require("mongoose")

app.use(bodyParser.json());

app.use("/bounty-hunter", require("./bountyRoute"))

app.use(express.static(path.join(__dirname, "public")))

mongoose.connect("mongodb://localhost/bounties", function(err) {
    if(err) {
        throw err;
    }
    console.log("connected to database")
});

//public refers to the public folder everything is in



//app.get("/bounty-hunter", function(req, res) {   
//    res.send(bounties);
//})
//
//app.get("/bounty-hunter/:bountyid", function(req, res) {   
//    for(var i = 0; i < bounties.length; i++) {
//        if(bounties[i].id === req.params.bountyid) {
//           return res.send(bounties[i]);
//        }
//    }
//    res.status(404).send({message: "Not found"});
//})
//
//
//app.post("/bounty-hunter", function(req, res) {
//    var newBounty = req.body;
//    newBounty.id = uuid.v4();
//    bounties.push(newBounty);
//    res.send(newBounty)
//});
//
//app.put("/bounty-hunter/:bountyid", function(req, res) {
//    var updateBounty = req.body;
//    for(var i = 0; i < bounties.length; i++) {
//        if(bounties[i].id === req.params.bountyid){
//            for(var key in updateBounty) {
//                if(updateBounty[key] != bounties[i][key]) {
//                    bounties[i][key] = updateBounty[key];
//                }
//                console.log(key)
//            }
//            return res.send(bounties[i]);
//        }
//    }
//})
//
//app.delete("/bounty-hunter/:bountyid", function(req, res){
//    var deleteBounty = req.body;    
//    for(var i = 0; i < bounties.length; i++) {
//        if(bounties[i].id === req.params.bountyid) {
//            bounties.splice(i, 1);
//            return res.send(bounties[i]);
//        }
//    }
//})

app.listen(port, function() {
    console.log("App is listening on port: " + port);
});