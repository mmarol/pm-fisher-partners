<?php

/**
 * Template Name: Delight
 * Description: Page layout for the delight page
 */

$delightArgs = array(
    'post_type'         => array('delight'),
    'posts_per_page'    => -1
);

$context                = Timber::context();
$context['page']        = Timber::get_post();
$context['delights']       = Timber::get_posts($delightArgs);

$templates              = array('page-delight.twig');

Timber::render($templates, $context);
