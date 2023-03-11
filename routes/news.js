var express = require("express");
var router = express.Router();
let request = require('request');
const cors = require('cors');
// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('913b6adfc01548c3bf2f5c39612eb959');
const axios = require("axios");

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,
  optionSuccessStatus:200
}

//router.get('/news', (req, res) => {
    router.get("/", async (req, res) => {
    var category = "general";
    var API_KEY = "913b6adfc01548c3bf2f5c39612eb959";
    // categories = [business, entertainment, general, health, science, sports, technology]
    var uri = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
    res.header("Access-Control-Allow-Origin", "*");
  
    axios
      .get(uri)
      .then(function (response) {
        var data = response.data;
        res.status(200).json({ data });
      })
      .catch(function (error) {
        res.status(400).json({ error });
      });
})




module.exports = router;