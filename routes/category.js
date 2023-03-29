const express = require("express");
const router = express.Router();
const axios = require("axios");
require('dotenv').config()
const pool = require("../db/db");
const API_KEY = process.env.API_KEY;

router.get("/", async (req, res) => {
//   const category = "general";

  
    // Make an API request to the News API with the specified category
    var uri = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    res.header("Access-Control-Allow-Origin", "*");

    // const articles = response.data.articles;

 
    axios
      .get(uri)
      .then(function (response) {
        var data = response.data;
      // uncomment below code if response content type to plain text is needed
      // res.set('Content-Type', 'text/plain'); 
      // res.send(response.data);
      console.log(response.data);
      res.status(200).json({ data });
      })
      .catch(function (error) {
        console.log(error);
        res.status(400).json({ error });
      });

});

router.get("/:category", async (req, res) => {
    var category = req.params.category;
    var uri = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
    res.header("Access-Control-Allow-Origin", "*");
 
    axios
      .get(uri)
      .then(function (response) {
        var data = response.data;
      // uncomment below code if response content type to plain text is needed
      // res.set('Content-Type', 'text/plain'); 
      // res.send(response.data);
      console.log(response.data);
      res.status(200).json({ data });
      })
      .catch(function (error) {
        console.log(error);
        res.status(400).json({ error });
      });
});



module.exports = router;
