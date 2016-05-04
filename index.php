<?php

include_once 'includes/main.php';

$hero_slides = render_slider();
$sections = render_sections();

template_layout(<<<HTML
  {$hero_slides}
  {$sections}
HTML
);

function render_sections() {
  $sections = array(
    array(
      'title' => 'Tige 24VE',
      'description' => 'Wake Boarding and Wake Surfing',
      'list' => array(
        '$165.00 per hour',
        'Seating capacity 13',
      ),
    ),
    array(
      'title' => 'Pontoon Party Barge',
      'description' => 'Friends, Families and Special Occassions',
      'list' => array(
        '$145.00 per hour',
        'Seating capacity 16',
      ),
    ),
  );

  return implode('', array_map(function($section, $key) {
    $counter = $key + 1;
    return build_section($section, $counter);
  }, $sections, array_keys($sections)));
}

function build_section($section, $counter) {
  $items = implode('', array_map(function($item) {
    return <<<HTML
      <li>{$item}</li>
HTML;
  }, $section['list']));

  return <<<HTML
    <section id="item-fold">
      <div id="background" class="background-{$counter}">
        <div id="inner-background">
          <h2>{$section['title']}</h2>
          <p>{$section['description']}</p>
        </div>
      </div>
      <div id="content">
        <div id="inner-content">
          <ul>{$items}</ul>
        </div>
      </div>
    </section>
HTML;
}

function render_slider() {
  $slides = array(
    array(
      'title' => 'Lake Austin Boat Rentals',
      'description' => 'We will make sure that your family and friends have a blast on the water! Our boat captains have many years of boating experience!',
    ),
    array(
      'title' => 'Lago Vista Boat Rentals',
      'description' => 'We have the perfect boat for Wake Boarding, Wake Surfing and Water Tubing!
',
    ),
    array(
      'title' => 'Lake Austin Boat Rentals',
      'description' => 'Unforgettable Experience! Thank you for choosing Wake Riderz!',
    ),
  );

  $slides = implode('', array_map(function($slide, $key) {
    $counter = $key + 1;
    return build_slide($slide, $counter);    
  }, $slides, array_keys($slides)));

  return <<<HTML
    <div class="hero">
      <figure>
        {$slides}
      </figure>
    </div>
HTML;
}

function build_slide($slide, $counter) {
  return <<<HTML
    <div class="slide slide-{$counter}">
      <div class="hero-inner">
        <div class="content">
          <h2>{$slide['title']}</h2>
          <p class="description">{$slide['description']}</p>
        </div>
      </div>
    </div>
HTML;
}