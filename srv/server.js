const express = require("express");
const app = express();

app.get("/", function (req, res, next) {
    res.send("Welcome User from local: ");
});


const port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log("Basic NodeJs listening on port " + port);
});