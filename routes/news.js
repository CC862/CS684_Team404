var express = require("express");
var router = express.Router();
const axios = require("axios");

router.get('/', async (req, res) => {
  var category = "general"; //for landing page user not logged in
  var API_KEY = "fa300537ec66402caea7ecb3cc1ad006";
  var uri = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
  
  axios
    .get(uri)
    .then(function (response) {
      var data = response.data;
      var articles = data.articles;
      var articleList = '<ul>';
      
      articles.forEach(article => {
        articleList += `
          <li>
            <img src="${article.urlToImage}" alt="${article.title}" />
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
          </li>
        `;
      });
      
      articleList += '</ul>';
      
      res.send(articleList);
    })
    .catch(function (error) {
      res.send(error);
    });
    
});

module.exports = router;
