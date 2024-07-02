<?php
/*
Plugin Name: Credit Strength Calculator
Description: A WordPress plugin for calculating credit strength
Version: 1.0
Author: Shahzaib Khan (CB)
*/

// Enqueue external CSS and JavaScript files
function cc_strength_calc_enqueue_scripts() {
    
    // Enqueue your custom stylesheet
    wp_enqueue_style('calc-style', plugins_url('style.css?v=4.3', __FILE__));
    wp_enqueue_style('jqueryui', 'https://code.jquery.com/ui/1.13.3/themes/base/jquery-ui.css');
    wp_enqueue_style('fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    
    // Enqueue external JavaScript file 
    wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.7.1.js', array(), null, true);
    wp_enqueue_script('jqueryui', 'https://code.jquery.com/ui/1.13.3/jquery-ui.js', array(), null, true);
    wp_enqueue_script('chartjs', 'https://cdn.jsdelivr.net/npm/chart.js', array(), null, true);
    wp_enqueue_script('punchjs', 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js', array(), null, true);
    
    // Enqueue your custom JavaScript file
    wp_enqueue_script('irr-calculator-script', plugins_url('script.js?v=4.5', __FILE__), array('jquery'), null, true);
}

add_action('wp_enqueue_scripts', 'cc_strength_calc_enqueue_scripts');

// Define the shortcode function
function cc_strength_calc_shortcode() {

  ob_start();
  include(plugin_dir_path(__FILE__) . 'form-template.php');
  return ob_get_clean();

}

// Register the shortcode
add_shortcode('cc_strength_calc_calculator', 'cc_strength_calc_shortcode');