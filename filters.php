<?php
function kn_add_borders( $block_content = '', $block = [] ) {
	// get the attributes while setting some defaults
	$defaults = ['borderStyle' => 'none'];
	$attrs = array_merge($defaults, $block['attrs']);

	// only do this for blocks that have borders
	if($attrs['borderStyle'] !== 'none'){
		$style = "
			border-style: {$attrs['borderStyle']};
			padding: {$attrs['borderPadding']}px;
		";
		return "<div style='$style'>$block_content</div>";
	}

	// else, return unmodified block content
	return $block_content;
}

add_filter( 'render_block', 'kn_add_borders', 10, 2 );
