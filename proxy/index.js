"use strict";

const superagent = require("superagent");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.post("/url", (req, res) => {
  superagent.get(req.body.url)
    .then(html => res.status(200).send(html));
})

app.listen(8080, console.log("boooooooo"));