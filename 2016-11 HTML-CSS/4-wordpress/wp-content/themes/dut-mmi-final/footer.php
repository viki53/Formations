	<div id="footer">
		<div class="container">
			<div class="row">
				<nav class="col">
					<h1>Pages</h1>
					<ul>
						<li><a href="page.html">Page #1</a></li>
						<li><a href="page.html">Page #2</a></li>
						<li><a href="page.html">Page #3</a></li>
						<li><a href="page.html">Page #4</a></li>
					</ul>
				</nav>
				<nav class="col">
					<h1>Derniers articles</h1>

					<?php
					$recent_posts = wp_get_recent_posts([
						'numberposts' => 3
					], OBJECT);
					?>
					<ul>
						<?php
						foreach($recent_posts as $post){
						?>
						<li><a href="<?php echo get_permalink($post->ID); ?>"><?php echo $post->title; ?></a></li>
						<?php
						}
						?>
					</ul>
				</nav>
				<nav class="col">
					<h1>Derniers commentaires</h1>

					<?php
					$recent_comments = get_comments([
						'number' => 3
					]);
					?>
					<ul>
						<?php
						foreach($recent_posts as $comment){
						?>
						<li><a href="<?php echo get_permalink($comment->comment_post_ID); ?>#comment-<?php echo $comment->comment_ID; ?>">Par <strong><?php echo $comment->comment_author; ?></strong> sur <em><?php echo get_the_title($comment->comment_post_ID); ?></em></a></li>
						<?php
						}
						?>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</body>
</html>
