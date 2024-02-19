import React from "react";
import {InspectorControls} from "@wordpress/block-editor";
import {PanelBody, PanelRow, SelectControl} from "@wordpress/components";

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
                </PanelBody>
            </InspectorControls>
        )
    }
}
