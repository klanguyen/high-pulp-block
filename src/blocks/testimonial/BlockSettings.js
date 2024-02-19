import React from "react";
import {InspectorControls} from "@wordpress/block-editor";
import {ColorPalette, PanelBody, PanelHeader, PanelRow, SelectControl} from "@wordpress/components";

export class BlockSettings extends React.Component {
    render(){
        const {attributes, setAttributes} = this.props;

        return (
            <InspectorControls>
                <PanelBody title="Basic" initialOpen={true}>
                    <PanelRow>
                        <SelectControl
                            label="Quote Background Color"
                            value={attributes.backgroundColorClass}
                            onChange={backgroundColorClass => setAttributes({backgroundColorClass})}
                            options={[
                                {value: '', label: 'Default'},
                                {value: 'bg-primary-blue', label: 'Primary Blue'},
                                {value: 'bg-primary-red', label: 'Primary Red'},
                            ]}
                        />
                    </PanelRow>
                    <PanelRow>
                        <PanelHeader
                            label="Border color"
                        />
                        <ColorPalette
                            label="Border Color"
                            colors={[
                                {name: 'blue', color: '#5151ff'},
                                {name: 'red', color: '#ef725e'},
                                {name: 'lilac', color: '#b1b1f5'}
                            ]}
                            value={attributes.borderColor}
                            onChange={borderColor => setAttributes({borderColor})}
                            disableCustomColors={true}
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
        )
    }
}
