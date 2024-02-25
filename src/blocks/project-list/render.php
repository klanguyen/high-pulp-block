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
				<a href="#modal-opened" id="modal-closed">
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

	<div class="modal-container" id="modal-opened">
		<div class="modal">
			<div class="modal__details">
				<h1 class="modal__title"><?= get_the_title(); ?></h1>
				<p class="modal__description"><?= get_the_excerpt(); ?></p>
			</div>

			<p class="modal__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.</p>

			<button class="modal__btn">Button &rarr;</button>

			<a href="#modal-closed" class="link-2"></a>

		</div>
	</div>
	<?php endwhile; ?>
</div>
