var articles = [
	{
		id: 1,
		title: "Title 1",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author1",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :"nice, good, health, dog"
	},
	{
		id: 2,
		title: "Title 2",
		summary: "Lorem ipsum dolor sit amet, .",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author1",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :"nice, good, health, dog"
	},
	{
		id: 3,
		title: "Title 3",
		summary: "Lorem ipsum dolor sit amet,.",
		createdAt: new Date("2017-02-27T23:00:00"),
		author: "author2",
		content:"orem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu ac est fringilla laoreet. Curabitur ut faucibus massa. Mauris posuere, nibh sit amet pharetra aliquet, purus neque pulvinar ex, vitae egestas felis metus vitae augue.",
		tags :"nice, good, health, dog"
	},
];
	function getArticles (skip, top, filterConfig){
	skip = skip||0;
	top = top||10;
	debugger;
	function callback (element, index, array){
		var endArray;
		if (filterConfig && filterConfig.author){
			if (filterConfig.author == array[index].author)
				return array[index];
			
		}
		if (filterConfig && filterConfig.title){
			if (filterConfig.title == array[index].title)
				return array[index];
			
		}
		else if (filterConfig && filterConfig.id){
			if (filterConfig.author == array[index].id)
				return array[index];
		}
		else if (filterConfig && filterConfig.summary){
			if (filterConfig.author == array[index].summary)
				return array[index];
		}
		else if (filterConfig && filterConfig.createdAt){
			if (filterConfig.author == array[index].createdAt)
				return array[index];
		}
		else if (filterConfig && filterConfig.tags){
			var tagsArray =  filterConfig.tags.split(',');
			for (var i = 0; i < tagsArray.length; i++) {
				if (array.tags.indexOf(tagsArray[i]) != -1){
					endArray.push(tagsArray[i]);
				}
			}
			return endArray;
		}
		return;
	}
	return articles.filter(callback, this);
}
function getArticle(idString) {
	for (var i = 0; i < articles.length; i++) {
		if (idString == articles[i].id)
			return articles[i];
	}
}
function valdiateArticle(object){
	debugger;
	if (   object.id != null 
		&& object.id >= 1 
		&& object. title != null 
		&& object.title.length < 100
		&& object.summary.length < 200
		&& object.summary != null 
		&& object.createdAt != null 
		&& object.author != null 
		&& object.content != null)
		return true;
	else return false;
}
function editArticle(articleId, object){
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
		return;
	}
		else return;
}
function removeArticle(articleId){
	function callback(element, index, array){
		if (element.id == articleId)
			return true;
		else return false;
	}
	articles.splice(articles.findIndex(callback), 1);
}