<?php
get_header();
?>
<div id="page">
	<div class="container">
		<main id="content">
			<?php
			while(have_posts()) {
				the_post();

			?>
			<article>
				<header>
					<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
				</header>
				<section>
					<?php the_excerpt(); ?>
				</section>
				<footer>
					<p>
						Posté <a href="<?php the_permalink(); ?>">le <?php the_date(); ?></a>
						par <?php the_author(); ?>
					</p>
					<p>
						<a href="<?php the_permalink(); ?>#comments"><?php comments_number('Aucun commentaire', 'Un commentaire', '% commentaires'); ?></a>
						—
						<a href="<?php the_permalink(); ?>#comment-form">Répondre</a>
					</p>
				</footer>
			</article>

			<?php
			}
			?>
		</main>
		<?php
		get_sidebar();
		?>
	</div>
</div>
<?php
get_footer();
