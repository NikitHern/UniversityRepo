var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('diskdb');
db = db.connect('D:/Semestr4/DB', ['articles']);
app.use(express.static('public'));
app.get('/hello', function (req, res) {
  res.send('Hello World!');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
db.loadCollections(['articles']);
function FindUser(object){
  db.loadCollections(['users']);
  let users = db.users.find();
  for (let i = 0; i < users.length; i++){
    if (object.name == users[i].name && object.password == users[i].password){
      db.loadCollections(['articles']);
      return true;
    }
  }
  db.loadCollections(['articles']);
  return false;
}
top = db.articles.find().length;
function getArticles (skip, top, filterConfig){	
    function callback(element, index, array){
      if (!filterConfig){
        return true;
      }
      if (filterConfig.author != null || filterConfig.author != element.author)
        return false;
      if (filterConfig.createdAt != null || filterConfig.createdAt != element.createdAt)
        return false;
      if (filterConfig.id != null || filterConfig.id != element.id)
        return false;
      return true;
    }
    var arr = db.articles.find();
  return arr.filter(callback).slice(skip, top);
}
function editArticle(object){
  function callback(element, index, array){
    if (element.id == array[index].id)
      return true;
    else return false;
  }
  let articleId = db.articles.find().findIndex(callback);
  if (articleId == -1){
    return false;
  }
  let arr = db.articles.find();
  arr[articleId] = object;
  db.articles.save(arr);
  return true;
}
function removeArticle(articleId){
  function callback(element, index, array){
    if (element.id == articleId)
      return true;
    else return false;
  }
  articleId = db.articles.find().findIndex(callback);
  if (articleId == -1){
    return false;
  }
  console.log(db.articles.find().splice(articleId, 1));
  return true;
}
//  "/articles?skip=5&top=5;"  req.query.skip ...
app.get('/articles', function (req, res) {
  res.json(getArticles(req.query.skip, req.query.skip, null));
});
app.put('/user', function (req, res) {
  let user = req.body;
  res.json(FindUser(user));
});
app.put("/addarticle", function(req, res){
  let arr = db.articles.find();
  arr.unshift(obj);
  db.articles.save(arr);
});
app.put("/editarticle", function(req, res){
  editArticle(obj);
});
app.put("/removearticle", function(req, res){
  console.log("waefawf");
  res.send(true);
});
app.listen(8080, function() {
  console.log('Node app is running on port 8080');
});