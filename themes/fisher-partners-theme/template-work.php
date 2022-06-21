<?php

/**
 * Template Name: Work
 * Description: Page layout for the work page
 */

$projectArgs = array(
    'post_type'         => array('project'),
    'posts_per_page'    => -1
);

$clientArgs = array(
    'post_type'         => array('client'),
    'posts_per_page'    => -1,
    'orderby'           => 'title',
    'order'             => 'ASC'
);

$context                = Timber::context();
$context['page']        = Timber::get_post();
$context['projects']    = Timber::get_posts($projectArgs);
$context['clients']     = Timber::get_posts($clientArgs);
$context['categories'] = Timber::get_terms('project-category');

$templates              = array('page-work.twig');

Timber::render($templates, $context);
