"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { v4: uuidv4 } = require("uuid");
const clients = require("./data/clients").clients;
const words = require("./data/words").words;

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
  //clients
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
  //hangman
  .get("/hangman/word/:id", (req, res) => {
    res.status(200).send(words.find((element) => element.id === req.params.id));
  })
  .get("/hangman/word", (req, res) => {
    let word = words[Math.floor(Math.random() * clients.length)];
    res.status(200).send({
      id: word.id,
      letterCount: word.letterCount,
    });
  })
  .get("/hangman/guess/:id/:letter", (req, res) => {
    let word = words.find((element) => element.id === req.params.id);
    let letters = word.word.split("");
    let result = [];
    for (let i = 0; i < word.letterCount; i++) {
      if (letters[i] == req.params.letter) {
        result.push(true);
      } else {
        result.push(false);
      }
    }
    if (word.word.includes(req.params.letter)) {
      res.status(200).send(result);
    } else {
      res.status(400).send(result);
    }
  })

  .listen(8000, () => console.log(`Listening on port 8000`));
