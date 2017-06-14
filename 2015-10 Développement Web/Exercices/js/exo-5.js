var articles = document.querySelectorAll('#content article');

function toggle(article, button) {
	return function () {
		var article_content = article.querySelector('.article-content');
		if (article_content.classList.contains('collapsed')){
			article_content.classList.remove('collapsed');
			button.textContent = 'Cacher';
		}
		else{
			article_content.classList.add('collapsed');
			button.textContent = 'Afficher';
		}
	}
}

Array.prototype.forEach.call(articles, function (article) {
	var article_header = article.querySelector('.article-header');

	var btn = document.createElement('button');
	btn.textContent = 'Cacher';
	btn.addEventListener('click', toggle(article, btn), false);
	article_header.appendChild(btn);
});
