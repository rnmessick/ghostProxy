"use strict";

const superagent = require("superagent");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("./public"));

app.post("/url", (req, res) => {
  console.log("the request is: " + req);
  superagent.get(req.body.url)
    .then(html => res.status(200).send(html.text))
    .catch(function(error){console.error(error);});
});

app.listen(8080, console.log("boooooooo"));
