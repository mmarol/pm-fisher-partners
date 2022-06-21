<?php

/**
 * Template Name: Blog
 * Description: Page layout for the blog page
 */

$blogArgs = array(
    'post_type'         => array('blog'),
    'posts_per_page'    => -1,
    'orderby'           => 'date',
    'order'             => 'DESC'
);

$context                = Timber::context();
$context['page']        = Timber::get_post();
$context['posts']       = Timber::get_posts($blogArgs);

$templates              = array('page-blog.twig');

Timber::render($templates, $context);
