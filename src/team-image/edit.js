import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";

import { PanelBody, Button } from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { teamImage } = attributes;

	const onSelectImage = (newImage) => {
		setAttributes({ teamImage: newImage.sizes.full.url });
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title="Image Setting" initialOpen={true}>
					<MediaUpload
						onSelect={onSelectImage}
						type="image"
						value={teamImage}
						render={({ open }) => (
							<Button onClick={open} icon="upload">
								Open Image
							</Button>
						)}
					/>
				</PanelBody>
			</InspectorControls>
			<figure className="sp-team__wrapper__member">
				<img
					src={teamImage}
					alt=""
					className="sp-team__wrapper__member__picture"
				/>
			</figure>
		</div>
	);
}
