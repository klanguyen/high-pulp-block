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
	'post_type' => 'project',
	'orderby' => 'post_title',
	'order' => 'asc',
]);

?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php while($query->have_posts()):
			$query->the_post();
	?>
	<div class="project-card">
		<div class="project-card-header">
			<?= get_the_post_thumbnail() ?>
		</div>
		<div class="project-card-body">
			<h3>
				<a href="<?= get_the_permalink() ?>">
					<?= get_the_title() ?>
				</a>
			</h3>
			<p>
				<?= get_the_content() ?>
			</p>
			<?php
			$technologies = get_post_meta(get_the_ID(), 'project_technologies', true);
			foreach($technologies as $tech){
				echo "<span class='tech-tag tag-teal'>$tech</span>";
			}
			?>

		</div>
	</div>
	<?php endwhile; ?>
</div>
