 <?php
require_once 'cgi-bin/less.php/Less.php';
$less_files = array( 'less/styles.less' => './' );
$options = array(
    'cache_dir' => 'css_cache',
    'sourceMap'         => true,
    'sourceMapWriteTo'  => 'css_cache/style.map',
    'sourceMapURL'      => 'css_cache/style.map',
);
$css_file_name = Less_Cache::Get( $less_files, $options );
?>
