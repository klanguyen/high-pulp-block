import React from "react";
import {InspectorControls, PanelColorSettings} from "@wordpress/block-editor";
import {
	CheckboxControl,
	ExternalLink,
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl,
	ToggleControl
} from "@wordpress/components";
import {__} from "@wordpress/i18n";

export class BlockSettings extends React.Component {
    render(){
        const {attributes, setAttributes} = this.props;

        return (
            <InspectorControls>
				<PanelColorSettings
					title={__('Color settings', 'high-pulp-blocks')}
					initialOpen={false}
					colorSettings={	[
						{
							value: attributes.dividerColor,
							onChange: dividerColor => {setAttributes({dividerColor})},
							label: __('Divider color', 'high-pulp-blocks')
						},
						{
							value: attributes.backgroundColor,
							onChange: backgroundColor => {setAttributes({backgroundColor})},
							label: __('Background color', 'high-pulp-blocks')
						}
					] }
				/>
                <PanelBody title="Block Theme" initialOpen={true}>
                    <PanelRow>
						<SelectControl
							label="Block Theme"
							value={attributes.blockTheme}
							onChange={blockTheme => setAttributes({blockTheme})}
							options={[
								{value: 'blue', label: 'Blue'},
								{value: 'red', label: 'Red'},
								{value: 'green', label: 'Green'},
								{value: 'yellow', label: 'Yellow'},
							]}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Project Link Settings" initialOpen={true}>
					<PanelRow>
						<fieldset>
							<TextControl
								label="Project link"
								value={attributes.projectLink}
								onChange={projectLink => setAttributes({projectLink})}
								help="Add your project link"
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label="Link label"
								value={attributes.linkLabel}
								onChange={linkLabel => setAttributes({linkLabel})}
								help="Add link label"
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<ToggleControl
								label="Add rel = nofollow"
								help={
									attributes.hasLinkNofollow
										? 'Has rel nofollow'
										: "No rel nofollow"
								}
								checked={attributes.hasLinkNofollow}
								onChange={hasLinkNofollow => setAttributes({hasLinkNofollow})}
							/>
						</fieldset>
					</PanelRow>
                </PanelBody>
            </InspectorControls>
        )
    }
}
