<?php

/**
 * Template Name: Profile
 * Description: Page layout for the profile page
 */

// $la_zone = new DateTimeZone('America/Los_Angeles');
// $ny_zone = new DateTimeZone('America/New_York');
// echo (wp_date("H:i", null, $la_zone));

$awardsArgs = array(
    'post_type'         => array('project'),
    'posts_per_page'    => -1,
    'meta_key' => 'awards',
    'meta_value' => array(''),
    'meta_compare' => 'NOT IN',
    'orderby' => 'title',
    'order' => 'ASC'
);

$context                = Timber::context();
$context['page']        = Timber::get_post();
$context['projects']       = Timber::get_posts($awardsArgs);
// $context['la_time']     = wp_date("H:i", null, $la_zone);
// $context['ny_time']     = wp_date("H:i", null, $ny_zone);

$templates              = array('page-profile.twig');

Timber::render($templates, $context);
