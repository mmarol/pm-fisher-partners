<?php

$context         = Timber::context();
$timber_post     = Timber::get_post();
$context['acf'] = get_field_objects();
$context['post'] = $timber_post;

$templates              = array('single-project.twig');

Timber::render($templates, $context);
