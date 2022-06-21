<?php

/**
 * Template Name: Engage
 * Description: Page layout for the engage page
 */

$context                = Timber::context();
$context['page']        = Timber::get_post();

$templates              = array('page-engage.twig');

Timber::render($templates, $context);
