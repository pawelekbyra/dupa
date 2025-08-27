<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no, maximum-scale=1, minimum-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <?php get_template_part( 'template-parts/app-content' ); ?>

    <?php wp_footer(); ?>
</body>
</html>
