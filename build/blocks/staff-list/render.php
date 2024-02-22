<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

/**
 * @var array $attributes Attributes from the block
 * @var string $content The HTML returned from the save() function
 * @var WP_Block $block All the details about this instance (which post/page this block is inserted into, name of the block)
 */

$query = new WP_Query([
			'post_type' => 'staff',
			'orderby' => 'post_title',
			'order' => 'asc',
		]);

?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php while($query->have_posts()):
		$query->the_post();
	?>
	<a class="flip-card" href="<?= get_the_permalink() ?>">
		<div class="flip-card-inner">
			<div class="flip-card-front">
				<?= get_the_post_thumbnail() ?>
			</div>
			<div class="flip-card-back"
                 style="background-color: <?= $attributes['cardColor'] ?>;
                         color: <?= $attributes['textColor'] ?>;"
            >
				<h3 class="name" style="color: <?= $attributes['headingColor'] ?>;"><?= get_the_title() ?></h3>
				<div class="position"><?= get_post_meta(get_the_ID(), 'staff_position', true) ?></div>
				<div class="bio">
					<p><?= get_the_excerpt() ?></p>
					<?php /* get_the_content() */ ?>
				</div>
			</div>
		</div>
	</a>
	<?php endwhile; ?>
</div>
