var user = "";
var articleNumber = 5;
"use strict";
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
		var arr = JSON.parse(localStorage.getItem("array"));
	return arr.filter(callback).slice(skip, top);
}
function getArticle(idString) {
	for (var i = 0; i < JSON.parse(localStorage.getItem("array")).length; i++) {
		if (idString == JSON.parse(localStorage.getItem("array"))[i].id)
			return JSON.parse(localStorage.getItem("array"))[i];
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
	articleId = JSON.parse(localStorage.getItem("array")).findIndex(callback);
	var article = JSON.parse(localStorage.getItem("array"))
	if (valdiateArticle(JSON.parse(localStorage.getItem("array"))[articleId])){
		if (object.title != null && object.title.length < 100){
			article[articleId].title = object.title;
		}
		if (object.summary != null && object.summary.length < 200 ) {
			article[articleId].summary = object.summary;
		}
		if (object.content != null){
			article[articleId].content = object.content;
		}
		localStorage.setItem("array", JSON.stringify(article));
		return article[articleId];
	}
		else return article[articleId];
}
function addArticleToData (object){
	if (!valdiateArticle(object))
		return false;
	//for (var i = 0; i < JSON.parse(localStorage.getItem("array")).length; i++) {
	//	if (object.id == JSON.parse(localStorage.getItem("array"))[i].id){
	//		object.id = JSON.parse(localStorage.getItem("array")).length+1;
	//
	//		}
	//	}
		var arr = JSON.parse(localStorage.getItem("array"));
			arr.unshift(object);
		localStorage.setItem("array", JSON.stringify(arr));
		console.log(JSON.parse(localStorage.getItem("array")));
		return true;
}
function removeArticle(articleId){
	function callback(element, index, array){
		if (element.id == articleId)
			return true;
		else return false;
	}
	var tmp = JSON.parse(localStorage.getItem("array"));
	tmp.splice(JSON.parse(localStorage.getItem("array")).findIndex(callback), 1);
	localStorage.setItem("array", JSON.stringify(tmp));
	console.log(tmp);
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
		var articleToDelete =  document.querySelector("[data-id=\""+ index + "\"]");
		var contentNode = document.querySelector(".content");
		contentNode.removeChild(articleToDelete);
	}
	function init(){
		ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
        ARTICLE_LIST_NODE = document.querySelector('.content');
	}
	function insertArticles(){
		var articlesNodes = renderArticles(JSON.parse(localStorage.getItem("array")));
		for (var i = 0; i < articleNumber; i++) {
			if (articleNumber > JSON.parse(localStorage.getItem("array")).length)
				break;
            ARTICLE_LIST_NODE.appendChild(articlesNodes[i]).querySelector('.article-list-item-title').addEventListener("click", eventRenderer.fullView);
            ARTICLE_LIST_NODE.appendChild(articlesNodes[i]).querySelector(".delete").addEventListener("click", eventRenderer.deleteB);
        }
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
        template.content.querySelector('.article-list-item-date').textContent = formatDate(new Date (article.createdAt));
        
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
		if (localStorage.getItem("user") == "" || localStorage.getItem("user") == "\"\"")
		{
			var DOMUser = document.querySelector('#user-info');
			DOMUser.innerHTML='Please, Log In';
			var addButton = document.getElementById("add-button");
			addButton.setAttribute("hidden", null)
			addButton = document.getElementById("logout");
			addButton.setAttribute("hidden", null)
			addButton = document.getElementById("log-in")
			addButton.removeAttribute("hidden")
			document.getElementById("name").removeAttribute("hidden");
			document.getElementById("password").removeAttribute("hidden");
		}
		else{
			user = JSON.parse(localStorage.getItem("user"));
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
		loginButton.addEventListener("click", enterAcc);
		var moreButton = document.getElementById("show-more");
		moreButton.addEventListener("click", more);


	}
	function deleteB(){
		deleteArticle(this.parentNode.getAttribute("data-id"));
		console.log("delete");
	}
	function more(){
		//Need to send and get data at the same time
	let req = new XMLHttpRequest();
	 req.addEventListener(req.onreadystatechange, function(){
		 let req2 = new XMLHttpRequest();
		 req2.open("GET", "/articles");
		 req2.send();
		 req2.addEventListener("load", function(req, res){
			let arr = JSON.parse(localStorage.getItem("array"));
			arr = arr.concat(arr, JSON.parse(req2.responseText));
			localStorage.setItem("array", JSON.stringify(arr));
			renderArticles();
		 });
	});
	req.open("PUT", "/articlecount");
	let skip = articleNumber - 5;
	req.send(skip);
	req.timeout = 10000;
	req.addEventListener("ontimeout", (function() {
		alert("WTF");
	}, 10000));
	}
	function fullView(){
		if (JSON.parse(localStorage.getItem("user")) == ""){
			alert("log in to view the full");
		}else{
		articleRenderer.removeArticles();
		document.getElementById("logout").setAttribute("hidden", null);
		document.getElementById("add-button").setAttribute("hidden", null);
		document.getElementById("cancel-button").removeAttribute("hidden");
		document.getElementById("edit-save-button").removeAttribute("hidden");
		var Button = document.getElementById("edit-save-button");
		var index = this.parentNode.getAttribute("data-id");
		Button.setAttribute("button-id", index);
		Button.addEventListener("click", editForm)
		document.getElementById("show-more").setAttribute("hidden", null);
		document.getElementById("add").removeAttribute("hidden");
		document.querySelector(".title-editor-input").value = this.innerHTML;
		var tmparticle = getArticle(index);
		document.querySelector(".tag-editor-input").value = tmparticle.tags.toString();
		document.querySelector(".summary-editor-input").value = tmparticle.summary;
		document.querySelector(".content-editor-input").value = tmparticle.content;
		articleRenderer.removeArticles();
		console.log("full view");
	}
	}
	function editForm(){
				var index = this.getAttribute("button-id");
				var article = {"id": index,
				"title": document.querySelector(".title-editor-input").value,
				"tags": document.querySelector(".tag-editor-input").value.split(","),
				"summary": document.querySelector(".summary-editor-input").value, 
				"content": document.querySelector(".content-editor-input").value, 
				"createdAt": new Date(),
				"author": localStorage.getItem("user") }
				document.getElementById("add").setAttribute("hidden", null);
				renderArticles();
				editArticle(index, article);
				renderArticles();
				document.getElementById("logout").removeAttribute("hidden");
				document.getElementById("add-button").removeAttribute("hidden");
				document.getElementById("cancel-button").setAttribute("hidden", null);
				document.getElementById("edit-save-button").setAttribute("hidden", null)
				document.getElementById("show-more").removeAttribute("hidden");
				this.removeEventListener("click", editForm)

	}
	function enterAcc(){
		var tmpuser = document.getElementById("name").value;
		var tmppass = document.getElementById("password").value;
		tmpuser = {"name": tmpuser,
					"password": tmppass};
		var req = new XMLHttpRequest();
		req.open("PUT", "/user");
		 req.setRequestHeader('content-type', 'application/json');
		 req.send(JSON.stringify(tmpuser));
		  req.addEventListener('load', function () {
                    let userFound = JSON.parse(this.responseText);
		if (userFound){
			user = tmpuser.name;
			localStorage.setItem("user", JSON.stringify(user));
		}
		else {
			alert("No such username and password combination found!")
			user = "";
			localStorage.setItem("user", "");
		}
		userRenderer.drawUser();
		  });
	}
	function exitAcc(){
		user = "";
		 document.getElementById("name").value = "";
		document.getElementById("password").value = "";
		localStorage.setItem("user", JSON.stringify(user));
		userRenderer.drawUser();
	}
	function addForm(){
		var content = document;
		content.querySelector(".title-editor-input").value = "";
		content.querySelector(".tag-editor-input").value = "";
		content.querySelector(".summary-editor-input").value = "";
		content.querySelector(".content-editor-input").value = "";
		document.getElementById("logout").setAttribute("hidden", null);
		document.getElementById("add-button").setAttribute("hidden", null);
		articleRenderer.removeArticles();
		document.getElementById("add").removeAttribute("hidden");
		document.getElementById("cancel-button").removeAttribute("hidden");
		document.getElementById("add-save-button").removeAttribute("hidden");
		var Button = document.getElementById("add-save-button");
		Button.addEventListener("click", saveForm);
		document.getElementById("show-more").setAttribute("hidden", null);
		console.log("add news");
	}
	function saveForm(){
				var content = document;
				var article = {"id":JSON.parse(localStorage.getItem("array")).length + 1,
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
			document.getElementById("cancel-button").setAttribute("hidden", null);
			document.getElementById("add").setAttribute("hidden", null);
			document.getElementById("add-save-button").setAttribute("hidden",null);
			content.querySelector(".title-editor-input").value = "";
			content.querySelector(".tag-editor-input").value = "";
			content.querySelector(".summary-editor-input").value = "";
			content.querySelector(".content-editor-input").value = "";
			renderArticles();
			userRenderer.drawUser();
			return;
		}
		console.log("saved");
	}
	return {
		fullView: fullView,
		init: init, 
		deleteB: deleteB
	};
}());
document.addEventListener('DOMContentLoaded', startApp);
function startApp() {
		userRenderer.drawUser();
	 eventRenderer.init();
	 
	 var req = new XMLHttpRequest();
	 req.addEventListener("load", function(){
	 localStorage.setItem("array",req.responseText);
	 articleRenderer.init();
	 renderArticles();
	});
	req.open("GET", "/articles");
	req.send();
}
function renderArticles(skip, top) {
	articleRenderer.removeArticles();
	 var tmparticles = getArticles(skip, top);
	   articleRenderer.insertArticles(tmparticles);
}
function deleteArticle(index){
		articleRenderer.deleteArticleFromDOM(index);
		removeArticle(index);
		var req = new XMLHttpRequest();
		req.open("PUT", "/removearticle");
		req.setRequestHeader('content-type', 'application/json');
		req.send(index);
	}
function addArticle(object){
	if (addArticleToData(object)){
    		articleRenderer.addArticleToDOM(object);
			 var req = new XMLHttpRequest();
			 req.open("PUT", "/addarticle");
			 req.setRequestHeader('content-type', 'application/json');
			 req.send(object);
    		 return true;
    	}
    	return false;
}
function editArticle(index, object){
		if (object = editArticleInData(index, object)){
    	articleRenderer.editArticleInDOM(index,object);
		var req = new XMLHttpRequest();
		req.open("PUT", "/editarticle");
		req.setRequestHeader('content-type', 'application/json');
		req.send(object);
    	return true;
	}
	return false;
}