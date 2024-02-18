/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes}) {
	return (
		<div { ...useBlockProps.save() }>
			<div className="project">
				<img className="project-img" src="https://picsum.photos/1000/1000" alt="Image Title" />
				<div className="project-body">
					<h2 className="project-title">{attributes.title}</h2>
					<div className="divider"></div>
					<p className="project-summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</p>
					<ul className="project-tag">
						<li className="tag-item">CSS</li>
						<li className="tag-item">HTML</li>
						<li className="tag-item">Vue.js</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
