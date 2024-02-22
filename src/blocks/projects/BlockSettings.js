import React from "react";
import {InspectorControls, PanelColorSettings} from "@wordpress/block-editor";
import {PanelBody, PanelRow, SelectControl} from "@wordpress/components";
import {__} from "@wordpress/i18n";

export class BlockSettings extends React.Component {
    render(){
        const {attributes, setAttributes} = this.props;

        return (
            <InspectorControls>
                <PanelBody title="Basic" initialOpen={true}>
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
            </InspectorControls>
        )
    }
}
