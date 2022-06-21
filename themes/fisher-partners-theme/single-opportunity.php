<?php

$context         = Timber::context();
$timber_post     = Timber::get_post();
$context['post'] = $timber_post;

$templates              = array('single-opportunity.twig');

Timber::render($templates, $context);
