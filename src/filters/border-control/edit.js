import {createHigherOrderComponent} from '@wordpress/compose';
import {Fragment} from '@wordpress/element';
import {InspectorControls, PanelColorSettings} from "@wordpress/block-editor";
import {Icon, PanelBody, PanelRow, RangeControl, SelectControl, TextControl} from "@wordpress/components";
import {addFilter} from '@wordpress/hooks';
import React from "react";

// create a wrapper function which will receive the block we are trying to wrap
function blockWrapper(WrappedBlock) {
	// return a React component
	return class extends React.Component {
		render() {
			let {attributes, setAttributes} = this.props;

			let divStyles = {
				borderStyle: attributes.borderStyle || 'none',
				borderWidth: `${attributes.borderWidth}px`,
				borderColor: attributes.borderColor,
				//padding: attributes.borderPadding + 'px',
				padding: `${attributes.borderPadding}px`,
				borderRadius: `${attributes.borderRadius}px`
			}

			return (
				<Fragment>
					{/* This is panel/toolbar we are adding to each block */}
					<InspectorControls>
						<PanelBody title="Border Controls" initialOpen={false}>
							<PanelRow>
								<SelectControl
									label="Style"
									value={attributes.borderStyle}
									onChange={borderStyle => setAttributes({borderStyle})}
									options={[
										{label: 'None', value: 'none'},
										{label: 'Solid', value: 'solid'},
										{label: 'Dashed', value: 'dashed'},
										{label: 'Dotted', value: 'dotted'},
									]}
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label="Padding"
									value={attributes.borderPadding}
									onChange={value => setAttributes({borderPadding: parseInt(value)})}
								/> px
							</PanelRow>
							<PanelBody>
								<RangeControl
									label="Border width"
									value={attributes.borderWidth}
									onChange={value => setAttributes({borderWidth: parseFloat(value)})}
									min={0.5}
									max={5}
									step={0.5}
									withInputField={true}
									afterIcon={<Icon
										icon={ () => (
											<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
												<text x="5" y="15" fill="black">px</text>
											</svg>
										) }
									/>}
								/>
							</PanelBody>
							<PanelBody>
								<RangeControl
									label="Border radius"
									value={attributes.borderRadius}
									onChange={value => setAttributes({borderRadius: parseInt(value)})}
									min={0}
									max={10}
									step={1}
									withInputField={true}
									afterIcon={<Icon
										icon={ () => (
											<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
												<text x="5" y="15" fill="black">px</text>
											</svg>
										) }
									/>}
								/>
							</PanelBody>
							<PanelColorSettings
								title="Colors"
								colorSettings={[
									{
										label: "Border color",
										value: attributes.borderColor,
										onChange: borderColor => setAttributes({borderColor})
									}
								]}
							/>
						</PanelBody>
					</InspectorControls>

					{/* This is a wrapper -- WrappedBlock is the block you are editing/wrapping */}
					<div className="wp-block" style={divStyles}>
						<WrappedBlock {...this.props} />
					</div>
				</Fragment>
			)
		}
	}
}

// Higher Order Components is a pretty high-level concept, but here's a good explanation:
// https://reactjs.org/docs/higher-order-components.html
// Note: this is *similar* to what WordPress does, but WordPress does not provide good documentation for this.
const borderComponent = createHigherOrderComponent(blockWrapper, 'border-control');

// register our filter with WordPress
addFilter('editor.BlockEdit', 'kn/border-control/block-wrapper', borderComponent);
