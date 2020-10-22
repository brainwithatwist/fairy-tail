var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {

    res.render("home");
});

app.get("/fallinlove/:thing", function (req, res) {
    var thing = req.params.thing;
    res.render("love", { thingVar: thing });
});

app.get("/posts", function (req, res) {
    var posts = [
        { title: "Post 1", author: "Susy" },
        { title: "Post 2", author: "Charlie" },
        { title: "Can u believe GOD", author: "Lucy" }
    ]
    res.render("posts", { posts: posts });
})
app.get("*", function (req, res) {
    res.send("This is out of the fairy world. Sorry can't find it");
})

app.listen(8080, function () {
    console.log("Server is listening!");
});