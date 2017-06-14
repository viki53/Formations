<!DOCTYPE html>
<html lang="<?php echo get_bloginfo('language'); ?>">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php echo get_bloginfo('name'); ?></title>

	<meta name="description" content="<?php echo get_bloginfo('description'); ?>">

	<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
</head>
<body<?php body_class(); ?>>
	<div id="topbar">
		<div class="container">
			<h1 id="site-name"><a href="<?php echo get_home_url(); ?>" class="logo"><?php echo get_bloginfo('name'); ?></a></h1>

			<nav id="top-menu">
				<ul>
					<?php
					if (is_home() || is_category() || is_tag()) {
						?>
					<li><a href="#content">Articles</a></li>
					<li><a href="#sidebar">Menu</a></li>
					<?php
					}
					else if (is_single()) {
					?>
					<li><a href="#content">Article</a></li>
					<li><a href="#comments">Commentaires</a></li>
					<li><a href="#comment-form">Répondre</a></li>
					<li><a href="#sidebar">Menu</a></li>
					<?php
					}
					else if (is_page()) {
					?>
					<li><a href="#content">Contenu principal</a></li>
					<?php
					}
					?>
					<li><a href="#footer">Pied de page</a></li>
				</ul>
			</nav>
		</div>
	</div>
