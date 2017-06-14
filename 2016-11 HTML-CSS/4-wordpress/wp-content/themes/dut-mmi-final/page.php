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
			</article>
		</main>
	</div>
</div>
<?php
get_footer();
