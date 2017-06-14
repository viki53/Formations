var $articles = $('#content article');

function toggle($article, $button) {
	return function () {
		var $article_content = $article.find('.article-content');
		if ($article_content.css('display') === 'none'){
			$article_content.css('display', '');
			$button.text('Cacher');
		}
		else{
			$article_content.css('display', 'none');
			$button.text('Afficher');
		}
	}
}

$articles.each(function (i, article) {
	var $article_header = $(article).find('.article-header');

	var $btn = $('<button></button>').text('Cacher').appendTo($article_header);
	$btn.on('click', toggle($(article), $btn));
});
