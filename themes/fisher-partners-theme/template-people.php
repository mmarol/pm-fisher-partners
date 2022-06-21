<?php

/**
 * Template Name: People
 * Description: Page layout for the people page
 */

// $categoryArgs = array(
//     'taxonomy'         => array('person-category'),
//     'posts_per_page'    => -1,
//     'orderby'           => 'title',
//     'order'             => 'ASC'
// );

$context                = Timber::context();
$context['page']        = Timber::get_post();
// $context['categories']  = Timber::get_terms($categoryArgs);

$templates              = array('page-people.twig');

Timber::render($templates, $context);
