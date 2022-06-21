<?php

/**
 * Template Name: News
 * Description: Page layout for the news page
 */

$pressArgs = array(
    'post_type'         => array('press'),
    'posts_per_page'    => -1,
    'orderby'           => 'date',
    'order'             => 'DESC'
);

$context                = Timber::context();
$context['page']        = Timber::get_post();
$context['press']       = Timber::get_posts($pressArgs);

$templates              = array('page-news.twig');

Timber::render($templates, $context);
