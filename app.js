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
	"password" : "17534" //123
},
{
	"name":"moderator",
	"password":"17514" //111
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
app.get('/user', function (req, res) {
  if(req.query.id) {
    return res.json(users.filter(user => Number(req.query.id) === user.id)[0]);
  }
  res.json(users);
});
app.get('/user/:id', function (req, res) {
  res.json(users.filter(user => Number(req.params.id) === user.id)[0]);
});
app.get('/user401/:id', function (req, res) {
  res.status(401).end();
});
app.get('/user500/:id', function (req, res) {
  // recursion, max call stack
  (function a(){
    a();
  }());

  res.end(`cool`);
});
app.get('/articles', function (req, res) {

	res.json(JSON.stringify(articles));
return JSON.stringify(articles);
});
app.post('/user', function (req, res) {
  let user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    id: users.length
  };
  users.push(user);

  res.json(user);
});

app.put('/user', function (req, res) {
  let user = users.filter(user => Number(req.body.id) === user.id)[0];
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;

  res.json(user);
});

app.delete('/user', function (req, res) {
  let id = req.query.id || req.body.id;
  users = users.filter(user => Number(id) !== user.id);
  res.json({idWasRemoved: Number(id)});
});

app.delete('/user/:id', function (req, res) {
  let id = req.params.id;
  users = users.filter(user => Number(id) !== user.id);
  res.json({idWasRemoved: Number(id)});
});

app.patch('/user', function (req, res) {
  let user = users.filter(user => Number(req.body.id) === user.id)[0];
  
  if (req.body.firstName) {
    user.firstName = req.body.firstName;
  }

  if (req.body.lastName) {
    user.lastName = req.body.lastName;
  }

  res.json(user);
});

app.listen(8080, function() {
  console.log('Node app is running on port 8080');
});