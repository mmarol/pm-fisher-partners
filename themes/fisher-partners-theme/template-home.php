<?php

/**
 * Template Name: Homepage
 * Description: Page layout for the homepage
 */

$context          = Timber::context();
$context['post'] = Timber::get_post();

$templates        = array('page-home.twig');

Timber::render($templates, $context);
