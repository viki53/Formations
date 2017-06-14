<div id="comments">
	<h1><?php comments_number('Aucun commentaire', 'Un commentaire', '% commentaires'); ?></h1>

	<ol class="comments-list">
		<?php
		while (have_comments()) {
		?>
		<li class="comment" id="comment-<?php comment_ID(); ?>">
			<header>
				<h2><?php comment_author(); ?></h2>
			</header>
			<div>
				<?php comment_text(); ?>
			</div>
			<footer>
				<p><a href="<?php the_permalink(); ?>#comment-<?php comment_ID(); ?>">Le <?php comment_date(); ?><a></p>
			</footer>
		</li>
		<?php
		}
		?>
	</ol>
</div>
