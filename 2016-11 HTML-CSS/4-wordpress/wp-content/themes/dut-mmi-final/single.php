<?php
get_header();
the_post();
?>
<div id="page">
	<div class="container">
		<main id="content">
			<article>
				<header>
					<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
				</header>
				<section>
					<?php the_content(); ?>
				</section>
				<footer>
					<p>
						Posté <a href="<?php the_permalink(); ?>">le <?php the_date(); ?></a>
						par <?php the_author(); ?>
					</p>
				</footer>
			</article>

			<?php comments_template(); ?>

			<form action="#comment-form" id="comment-form">
				<fieldset>
					<legend>Répondre</legend>

					<div>
						<label for="comment-form-author_name"></label>
						<input type="text" name="author_name" id="comment-form-author_name">
					</div>
					<div>
						<label for="comment-form-author_email"></label>
						<input type="email" name="author_email" id="comment-form-author_email">
					</div>
					<div>
						<label for="comment-form-content"></label>
						<textarea name="content" id="comment-form-content" cols="30" rows="8"></textarea>
					</div>
				</fieldset>

				<div>
					<button type="submit">Valider</button>
				</div>
			</form>
		</main>
		<?php
		get_sidebar();
		?>
	</div>
</div>
<?php
get_footer();
