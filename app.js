var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('diskdb');
db = db.connect('/path/to/db-folder', ['collection-name']);
app.use(express.static('public'));
app.get('/hello', function (req, res) {
	res.send('Hello World!');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var users = [{
	"name" :"admin",
	"password" : "123" //123
},
{
	"name":"moderator",
	"password":"111" //111
}];
var articles =  [
	{
		id: 1,
		title: "Title 1",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author1",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},
	{
		id: 2,
		title: "Title 2",
		summary: "Lorem ipsum dolor sit amet, .",
		createdAt: new Date("2017-02-28T23:00:00"),
		author: "author1",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},
	{
		id: 3,
		title: "Title 3",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author2",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},
	{
		id: 4,
		title: "Title 4",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author7",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},
	{
		id: 5,
		title: "Title 5",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author5",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},
	{
		id: 6,
		title: "Title 3",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author3",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},
	{
		id: 6,
		title: "Title 6",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author2",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},
	{
		id: 7,
		title: "Title 3",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author10",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},
	{
		id: 8,
		title: "Title 3",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author7",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},
	{	id: 9,
		title: "Title 9",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author0",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},{
	id: 10,
		title: "Title 00",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author7",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},{
	id: 11,
		title: "Title 11",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author7",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},{
	id: 12,
		title: "Title 12",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author12",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},{
	id: 13,
		title: "Title 13",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author13",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},{
	id: 14,
		title: "Title 14",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author14",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},{
	id: 15,
		title: "Title 15",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author14",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},{
	id: 16,
		title: "Title 16",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author14",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},{
	id: 17,
		title: "Title 17",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author17",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},{
	id: 18,
		title: "Title 18",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author18",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},{
	id: 19,
		title: "Title 19",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author19",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},{
	id: 20,
		title: "Title 20",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author20",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :["nice", "good", "health", "dog"]
	},

];
var skip = 0;
function FindUser(object){
	for (let i = 0; i < users.length; i++){
		if (object.name == users[i].name && object.password == users[i].password)
		return true;
	}
	return false;
}
top = articles.length;
function getArticles (skip, top, filterConfig){
	skip = skip||0;
	top = top||10;	
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
		var arr = articles;
	return arr.filter(callback).slice(skip, top);
}
function editArticle(object){
	function callback(element, index, array){
		if (element.id == array[index].id)
			return true;
		else return false;
	}
	let articleId = articles.findIndex(callback);
	if (articleId == -1){
		return false;
	}
	articles[articleId] = object;
	return true;
}
function removeArticle(articleId){
	function callback(element, index, array){
		if (element.id == articleId)
			return true;
		else return false;
	}
	articleId = articles.findIndex(callback);
	if (articleId == -1){
		return false;
	}
	console.log(articles.splice(articleId, 1));
	return true;
}
app.get('/articles', function (req, res) {
res.json(getArticles(skip, skip + 5, null ));
});
app.get('/articles/count', function (req, res) {
return getArticles(skip, top, null );
});
app.put('/user', function (req, res) {
  let user = req.body;
  res.json(FindUser(user));
});
app.put("/addarticle", function(req, res){
let obj = req.body;
articles.unshift(obj);
});
app.put("/editarticle", function(req, res){
let obj = req.body;
editArticle(obj);
});
app.put("/removearticle", function(req, res){
let obj = req.body;

});
app.put("/articlecount", function (req, res){
skip = req.body;
})
app.listen(8080, function() {
  console.log('Node app is running on port 8080');
});