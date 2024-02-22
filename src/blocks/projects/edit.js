/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck, PanelColorSettings,
	PlainText,
	RichText,
	useBlockProps
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {BlockSettings} from "./BlockSettings";
import {ExternalLink} from "@wordpress/components";
import React from "react";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	return (
		<div { ...useBlockProps() }>
			<BlockSettings attributes={attributes} setAttributes={setAttributes} />
			<div className={`project ${attributes.blockTheme}`}
				 >
				<MediaUploadCheck>
					<MediaUpload
						allowedTypes={['image']}
						onSelect={	file => {
							console.log(file);
							setAttributes({projectImgUrl: file.sizes.full.url})
							}
						}
						render={ ({open}) => <img className="project-img"
												  src={attributes.projectImgUrl}
												  alt="Upload a project photo"
												  onClick={open}/>}
					/>
				</MediaUploadCheck>
				<div className="project-body">
					<PlainText
						className="project-title"
						placeholder="Project Title"
						value={attributes.title}
						onChange={ title => setAttributes({title}) }
					/>
					<div className="divider"
						 ></div>
					<RichText
						className="project-summary"
						tagName="p"
						placeholder="This is a super cool project I made."
						value={attributes.summary}
						onChange={ summary => setAttributes({summary}) }
					/>
					<ul className="project-tag">
						<li className="tag-item">CSS</li>
						<li className="tag-item">HTML</li>
						<li className="tag-item">Vue.js</li>
					</ul>
					<p><ExternalLink
						href={attributes.projectLink}
						className="project-link"
						rel={attributes.hasLinkNofollow ? "nofollow" : ""}
					>
						{attributes.linkLabel}
					</ExternalLink></p>
				</div>
			</div>
		</div>
	);
}
