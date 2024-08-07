<?php
/**
 * @wordpress-plugin
 * Plugin Name:       Fees Comparison Calculator
 * Plugin URI:        https://store.usbswiper.com/
 * Description:       Compare competitors to see what rates you'll get so you can choose the best option.
 * Version:           1.0.0
 * Author:            USBSwiper
 * Author URI:        https://store.usbswiper.com/
 * License:           GNU General Public License v3.0
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       fees-comparison-calculator
 * Domain Path:       /i18n/languages/
 * GitHub Plugin URI: https://github.com/usbswiper/wp-rate-calculator
 * Requires at least: 5.8
 * Tested up to: 6.5.5
 */

// Enqueue external CSS and JavaScript files
function usbswiper_rate_calc_enqueue_scripts() {
    
    // Enqueue your custom stylesheet
    wp_enqueue_style('calc-style', plugins_url('style.css?v='.uniqid(), __FILE__));
    wp_enqueue_style('jqueryui', 'https://code.jquery.com/ui/1.13.3/themes/base/jquery-ui.css');
    wp_enqueue_style('fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    
    // Enqueue external JavaScript file 
    wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.7.1.js', array(), null, true);
    wp_enqueue_script('jqueryui', 'https://code.jquery.com/ui/1.13.3/jquery-ui.js', array(), null, true);
    wp_enqueue_script('chartjs', 'https://cdn.jsdelivr.net/npm/chart.js', array(), null, true);
    wp_enqueue_script('punchjs', 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js', array(), null, true);
    
    // Enqueue your custom JavaScript file
    wp_enqueue_script('irr-calculator-script', plugins_url('script.js?v='.uniqid() , __FILE__), array('jquery'), null, true);
}

add_action('wp_enqueue_scripts', 'usbswiper_rate_calc_enqueue_scripts');

// Define the shortcode function
function usbswiper_rate_calc_shortcode() {

  ob_start();
  include(plugin_dir_path(__FILE__) . 'form-template.php');
  return ob_get_clean();

}

// Register the shortcode
add_shortcode('usbswiper_rate_calc', 'usbswiper_rate_calc_shortcode');