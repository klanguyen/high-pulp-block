<?php
function kn_add_borders( $block_content = '', $block = [] ) {
	// TODO: create wrapper

	// return unmodified block content
	return $block_content;
}

add_filter( 'render_block', 'kn_add_borders', 10, 2 );
