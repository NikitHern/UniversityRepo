var user = "";
var users = [{
	"name" :"admin",
	"password" : "17534" //123
},
{
	"name":"moderator",
	"password":"17514" //111
}];
"use strict";
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
		createdAt: new Date("2017-02-27T23:00:00"),
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
	function getArticles (skip, top, filterConfig){
	skip = skip||0;
	top = top||10;	
		function callback(element, index, array){
			if (!filterConfig){
				return;
			}
			if (filterConfig.author != null || filterConfig.author != element.author)
				return false;
			if (filterConfig.createdAt != null || filterConfig.createdAt != element.createdAt)
				return false;
			if (filterConfig.id != null || filterConfig.id != element.id)
				return false;
			return true;
		}
	return articles.filter(callback).slice(skip, top);
}
function getArticle(idString) {
	for (var i = 0; i < articles.length; i++) {
		if (idString == articles[i].id)
			return articles[i];
	}
}
function valdiateArticle(object){
	if (   object.id != null 
		&& object. title != null 
		&& object.title != ""
		&& object.title.length < 100
		&& object.summary.length < 200
		&& object.summary != null 
		&& object.summary != ""
		&& object.createdAt != null 
		&& object.author != null 
		&& object.content != null
		&& object.content != "")
		return true;
	else return false;
}
function editArticleInData(articleId, object){
	function callback(element, index, array){
		if (element.id == articleId)
			return true;
		else return false;
	}
	articleId = articles.findIndex(callback);
	if (valdiateArticle(articles[articleId])){
		if (object.title != null && object.title.length < 100){
			articles[articleId].title = object.title;
		}
		if (object.summary != null && object.summary.length < 200 ) {
			articles[articleId].summary = object.summary;
		}
		if (object.content != null){
			articles[articleId].content = object.content;
		}
		return articles[articleId];
	}
		else return articles[articleId];
}
function addArticleToData (object){
	if (!valdiateArticle(object))
		return false;
	for (var i = 0; i < articles.length; i++) {
		if (object.id == articles[i].id){
			object.id = articles.length+1;
			break;
			}
		}
		articles.unshift(object);
		console.log(articles);
		return true;
}
function removeArticle(articleId){
	function callback(element, index, array){
		if (element.id == articleId)
			return true;
		else return false;
	}
	articles.splice(articles.findIndex(callback), 1);
	console.log(articles);
	return true;
}
var articleRenderer = ( function() {
	var ARTICLE_TEMPLATE;
    var ARTICLE_LIST_NODE;
    function addArticleToDOM(object){
    		var article = renderArticle(object);
    		 var contentNode = document.querySelector(".content");
    		 contentNode.insertBefore(article, contentNode.firstChild);
    }
    function editArticleInDOM(index, object){
    	object = renderArticle(object);
    	var articleToEdit =  document.querySelector("[data-id='"+ index + "']");
    	 var contentNode = document.querySelector(".content");
    	 contentNode.replaceChild(object, articleToEdit)
    }
    function deleteArticleFromDOM(index){
		var articleToDelete =  document.querySelector("[data-id='"+ index + "']");
		var contentNode = document.querySelector(".content");
		contentNode.removeChild(articleToDelete);
	}
	function init(){
		ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
        ARTICLE_LIST_NODE = document.querySelector('.content');
	}
	function insertArticles(){
		var articlesNodes = renderArticles(articles);
		articlesNodes.forEach(function (node) {
            ARTICLE_LIST_NODE.appendChild(node);
        });
	}
	 function removeArticles () {
        ARTICLE_LIST_NODE.innerHTML = '';
    }
     function renderArticles(articles) {
        return articles.map(function (article) {
            return renderArticle(article);
        });
    }
    function renderArticle(article) {
    	 var template = ARTICLE_TEMPLATE;
        template.content.querySelector('.article-list-item').dataset.id = article.id;
        template.content.querySelector('.article-list-item-title').textContent = article.title;
        template.content.querySelector('.article-list-item-summary').textContent = article.summary;
        template.content.querySelector('.article-list-item-author').textContent = article.author;
        template.content.querySelector('.article-list-item-date').textContent = formatDate(article.createdAt);
        
        var tags = template.content.querySelector('.article-list-item-tags');
        tags.innerHTML = "Tags:";
        for(i = 0; i < article.tags.length; i++){ 
			var tmp = document.createElement('li');
			tmp.innerHTML = "<li>" + article.tags[i] + " " + "</li>"; 
			tags.appendChild(tmp);
		}
        return template.content.querySelector('.article-list-item').cloneNode(true);
    }
    function formatDate(d) {
        return d.getDate() + '/'+ (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' +
            d.getHours() + ':' + d.getMinutes();
    }
     return {
     	addArticleToDOM : addArticleToDOM,
     	editArticleInDOM : editArticleInDOM,
        init: init,
        insertArticles: insertArticles,
        removeArticles: removeArticles,
        deleteArticleFromDOM : deleteArticleFromDOM
    };
}());
var userRenderer = (function() {
	function drawUser(){
		if (user == "")
		{
			var DOMUser = document.querySelector('#user-info');
			DOMUser.innerHTML='Please, Log In';
			var addButton = document.getElementById("add-button");
			addButton.setAttribute("hidden", null)
			addButton = document.getElementById("logout");
			addButton.setAttribute("hidden", null)
			addButton = document.getElementById("log-in")
			addButton.removeAttribute("hidden", null)
			document.getElementById("name").removeAttribute("hidden")
			document.getElementById("password").removeAttribute("hidden")
		}
		else{
			var DOMUser = document.querySelector('#user-info');
			DOMUser.innerHTML='Logged in as ' + user;
			var addButton = document.getElementById("add-button");
			addButton.removeAttribute("hidden")
			addButton = document.getElementById("logout");
			addButton.removeAttribute("hidden", null)
			addButton = document.getElementById("log-in")
			addButton.setAttribute("hidden", null)
			document.getElementById("name").setAttribute("hidden", null)
			document.getElementById("password").setAttribute("hidden", null)
		}
	}
	return {
		drawUser: drawUser
	}
}());
var eventRenderer = (function(){
	function init(){
		var addButton = document.getElementById("add-button");
		addButton.addEventListener("click", addForm);
		var exitButton = document.getElementById("logout");
		exitButton.addEventListener("click", exitAcc);
		var loginButton = document.getElementById("log-in");
		loginButton.addEventListener("click", enterAcc)
	}
	function enterAcc(){
		var tmpuser = document.getElementById("name").value;
		var tmppass = document.getElementById("password").value;
		var key = parseInt("0100010000000101", 2);
		tmppass = tmppass^key;
		tmpuser = {"name": tmpuser,
					"password": tmppass};
					function callback(element, index, array){
			if (tmpuser.name != null && tmpuser.name != undefined && tmpuser.name != array[index].name)
				return false;
			if (tmpuser.password != null && tmpuser.password != undefined && tmpuser.password != array[index].password)
				return false;
			return true;
		}
		if (users.find(callback)){
			user = tmpuser.name;
		}
		else {
			alert("No such username and password combination found!")
			user = "";
		}
		userRenderer.drawUser();
	}
	function exitAcc(){
		user = "";
		userRenderer.drawUser();
	}
	function addForm(){
		document.getElementById("logout").setAttribute("hidden", null);
		articleRenderer.removeArticles();
		document.querySelector(".content").innerHTML = ' <div class="title-tags"> <div class ="title-editor">  <h1 class ="title-editor-title">Add a Title!</h1><textarea maxlength=100 class ="title-editor-input"></textarea> </div><div class ="tag-editor"> <h1 class ="tag-editor-title">Add tags!</h1><textarea placeholder="Note, that the tags must be divided by a comma" class ="tag-editor-input"></textarea >  </div></div><div class ="summary-editor"><h1 class ="summary-editor-title">Add a summary!</h1> <textarea maxlength=199 rows=4 class ="summary-editor-input"></textarea >   </div>       <div class ="content-editor">           <h1 class ="content-editor-title">Add content!</h1>   <textarea rows=8 class ="content-editor-input"></textarea > </div> </div>'
				document.querySelector(".control-units").innerHTML = '<ul class ="control-units" >  <button id="add-save-button" >Добавить новость</button> <button id="cancel-button"  onclick="location.href=\'index.html\'" >cancel</button> '
				var Button = document.getElementById("add-save-button");
				Button.addEventListener("click", saveForm);
				console.log("add news");
	}
	function saveForm(){
				var content = document.querySelector(".content");
				var article = {"id":articles.length+1,
				"title": content.querySelector(".title-editor-input").value,
				"tags": content.querySelector(".tag-editor-input").value.split(","),
				"summary": content.querySelector(".summary-editor-input").value, 
				"content": content.querySelector(".content-editor-input").value, 
				"createdAt": new Date(),
				"author": user }
		if (!addArticle(article)){
			alert("your form isnt valid, check the input!");
			return;
		}
		else{
			document.querySelector(".content").innerHTML = '<template id="template-article-list-item"><div class="article-list-item" data-id="id"><h3 class="article-list-item-title"> Заголовок статьи </h3><p class="article-list-item-summary"></p><div class="article-list-item-meta"> <ul class="article-list-item-tags"> </ul><p class="item-author"> Author: <span class="article-list-item-author"></span></p><span>date: <span class="article-list-item-date"></span></div></div></template>'
			document.querySelector(".control-units").innerHTML = ' <a href = "#"> <img name="left" alt="Left" src="https://github.com/NikitHern/UniversityRepo/blob/master/mockups/strelkavlevo.png?raw=true"> </a> <button id="add-button">Добавить новость</button>   <button id="log-in" hidden >Log in!</button><a href= "#"><img name="right" alt="Right" src="https://github.com/NikitHern/UniversityRepo/blob/master/mockups/strelkavlevo.png?raw=true"> </a>'
			startApp();
			return;
		}
		console.log("saved");
	}
	return {
		init: init
	};
}());
document.addEventListener('DOMContentLoaded', startApp);
function startApp() {
	userRenderer.drawUser();
	 articleRenderer.init();
	 eventRenderer.init();
	 renderArticles();
}
function renderArticles(skip, top) {
	articleRenderer.removeArticles();
	 var articles = getArticles(skip, top);
	   articleRenderer.insertArticles(articles);
}
function deleteArticle(index){
		articleRenderer.deleteArticleFromDOM(index);
		removeArticle(index);
	}
function addArticle(object){
	if (addArticleToData(object)){
    		articleRenderer.addArticleToDOM(object);
    		 return true;
    	}
    	return false;
}
function editArticle(index, object){
		object = editArticleInData(index, object);
    	articleRenderer.editArticleInDOM(index,object);
}