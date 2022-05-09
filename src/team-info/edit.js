import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

import {
	PanelBody,
	TextControl,
	ToggleControl,
	Dashicon,
	Button,
} from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { title, designation, aboutme } = attributes;

	return (
		<div>
			<div className="sp-team__wrapper__body">
				<RichText
					tagName="h3"
					className="sp-team__wrapper__body__name"
					onChange={(newTitle) => setAttributes({ title: newTitle })}
					allowedFormats={["core/bold", "core/italic", "core/link"]}
					value={title}
					placeholder={__("Enter your name...")}
				/>
				<RichText
					tagName="div"
					className="sp-team__wrapper__body__position"
					onChange={(newDesignation) =>
						setAttributes({ designation: newDesignation })
					}
					allowedFormats={["core/bold", "core/italic", "core/link"]}
					value={designation}
					placeholder={__("Enter your designation...")}
				/>
				<RichText
					tagName="p"
					className="sp-team__wrapper__body__about"
					onChange={(newAboutme) => setAttributes({ aboutme: newAboutme })}
					allowedFormats={["core/bold", "core/italic", "core/link"]}
					value={aboutme}
					placeholder={__("Enter your about...")}
				/>
			</div>
		</div>
	);
}
