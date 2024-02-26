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
	<a href="<?= get_the_permalink() ?>" class="project-card">
		<img class="project-img" src="<?= get_the_post_thumbnail_url() ?>" alt="<?= get_the_title() ?>" />
		<div class="project-info">
			<h2 class="project-title" style="color: <?= $attributes['headingColor'] ?>;"><?= get_the_title() ?></h2>
			<span class="brief-desc"><?= get_post_meta(get_the_ID(), 'brief_description', true) ?></span>
			<ul class="technologies-list">
				<?php
				$technologies = get_post_meta(get_the_ID(), 'project_technologies', true);
				foreach($technologies as $tech){
					echo "<li class='tech-item'>$tech</li>";
				}
				?>
			</ul>
		</div>
	</a>
	<!--<div class="project-card">
		<div class="project-card-header">
			<?php /*= get_the_post_thumbnail() */?>
		</div>
		<div class="project-card-body">
			<h3>
				<a href="<?php /*= get_the_permalink() */?>">
					<?php /*= get_the_title() */?>
				</a>
			</h3>
			<p>
				<?php /*= get_post_meta(get_the_ID(), 'brief_description', true) */?>
			</p>
			<div class="technologies-list">
			<?php
/*			$technologies = get_post_meta(get_the_ID(), 'project_technologies', true);
			foreach($technologies as $tech){
				echo "<span class='tech-item'>$tech</span>";
			}
			*/?>
			</div>
		</div>
	</div>-->
	<?php endwhile; ?>
</div>
