/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {RichText, useBlockProps} from '@wordpress/block-editor';

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
			<div className={`project ${attributes.blockTheme}`}>
				<img className="project-img" src={attributes.projectImgUrl} alt="Photo of project"/>
				<div className="project-body">
					<h2 className="project-title">{attributes.title}</h2>
					<div className="divider"></div>
					<RichText.Content
						className="project-summary"
						tagName="p"
						value={attributes.summary}
					/>
					<ul className="project-tag">
						<li className="tag-item">CSS</li>
						<li className="tag-item">HTML</li>
						<li className="tag-item">Vue.js</li>
					</ul>
					<p><a href={attributes.projectLink}
						   className="project-link"
						   rel={ attributes.hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
					   	>{attributes.linkLabel}</a></p>
				</div>
			</div>
		</div>
	);
}
