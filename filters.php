<?php
function kn_add_borders( $block_content = '', $block = [] ) {
	// get the attributes while setting some defaults
	$defaults = [
		'borderStyle' => 'none',
		'borderPadding' => 10,
		'borderColor' => 'black',
		'borderWidth' => 1,
		'borderRadius' => 0,
	];
	$attrs = array_merge($defaults, $block['attrs']);

	// only do this for blocks that have borders
	if($attrs['borderStyle'] !== 'none'){
		$style = "
			border-style: {$attrs['borderStyle']};
			padding: {$attrs['borderPadding']}px;
			border-color: {$attrs['borderColor']};
			border-width: {$attrs['borderWidth']}px;
			border-radius: {$attrs['borderRadius']}px;
		";
		return "<div style='$style'>$block_content</div>";
	}

	// else, return unmodified block content
	return $block_content;
}

add_filter( 'render_block', 'kn_add_borders', 10, 2 );
