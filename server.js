"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { v4: uuidv4 } = require("uuid");
const clients = require("./data/clients").clients;

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints
  .get("/users", (req, res) => {
    res.status(200).send(clients);
  })
  .get("/users/:id", (req, res) => {
    res
      .status(200)
      .send(clients.find((element) => element.id === req.params.id));
  })
  .delete("/users/:id", (req, res) => {
    clients.splice(
      clients.findIndex((element) => element.id === req.params.id),
      1
    );
    res.status(200).send(clients);
  })
  .post("/users", (req, res) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (req.body.email.match(mailformat)) {
      let newClient = {
        id: uuidv4(),
        isActive: true,
        age: req.body.age,
        name: req.body.name,
        gender: req.body.gender,
        company: req.body.company,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
      };
      clients.push(newClient);
      res.status(201).send(clients);
    } else {
      res.status(400).send("bro enter your shit correctly next time");
    }
  })

  .listen(8000, () => console.log(`Listening on port 8000`));
