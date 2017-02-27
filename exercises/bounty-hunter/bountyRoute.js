var express = require("express");
var bountyRoute = express.Router();
var Bounty = require("./schema")

bountyRoute.get("/", function (req, res) {
    console.log(req.query)
    Bounty.find(req.query, function (err, bounties) {
        res.send(bounties)
    })
});

bountyRoute.get("/:id", function (req, res) {
    Bounty.findById(req.params.id, function (err, bounty) {
        if(err) return res.status(500).send(err);
        res.send(bounty);
    })
});

bountyRoute.post("/", function (req, res) {
    var bountyHunter = new Bounty(req.body);
    bountyHunter.save(function (err) {
        if(err) {
            return res.status(500).send(err);
        }
        res.status(201).send(bountyHunter);
    })
})

bountyRoute.put("/:id", function(req, res) {
    Bounty.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, function (err, updateBounty) {
        if (err) return res.status(500).send(err);
        res.send(updateBounty);
    })
});

bountyRoute.delete("/:id", function (req, res) {
    Bounty.findByIdAndRemove(req.params.id, function (err, bounty) {
        if (err) return res.status(500).send(err);
        res.send("successfully deleted bountyHunter");
    })
});

module.exports = bountyRoute




