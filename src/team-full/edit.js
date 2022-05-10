import { __ } from "@wordpress/i18n";

import teamLayout1 from "./images/layout-1.svg";
import teamLayout2 from "./images/layout-2.svg";
import teamLayout3 from "./images/layout-3.svg";
import teamLayout4 from "./images/layout-4.svg";

import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaUpload,
	InnerBlocks,
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

const TEAM_IMAGE = [
	["create-block/team-image", {}],
	["create-block/team-info", {}],
	["create-block/team-social", {}],
];

export default function Edit({ attributes, setAttributes }) {
	// console.warn("edit attributes", attributes);
	const {
		toggleField,
		twitterField,
		facebookField,
		youtubeField,
		emailField,
		teamImage,
		teamLayout,
	} = attributes;

	// const [social, setSocial] = useState(false);
	const [layout, setLayout] = useState("default");
	const teamLayoutFunction = () => {
		setAttributes({ teamLayout: layout });
		switch (layout) {
			case "default":
				return (
					<div className="sp-team">
						<InnerBlocks template={TEAM_IMAGE} templateLock="insert" />
					</div>
				);
			case "second":
				return (
					<div className="sp-team">
						<InnerBlocks template={TEAM_IMAGE} templateLock="insert" />
					</div>
				);
			default:
				return <h1>No project match</h1>;
		}
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title="Select Team Layout" initialOpen={true}>
					<div className="sp-team-thums">
						<div
							className="sp-team-thums__thum"
							onClick={(e) => setLayout("default")}
						>
							<img src={teamLayout1} alt="Layout-1" />
						</div>
						<div
							className="sp-team-thums__thum"
							onClick={(e) => setLayout("second")}
						>
							<img src={teamLayout2} alt="Layout-2" />
						</div>
						<div
							className="sp-team-thums__thum"
							onClick={(e) => setLayout("third")}
						>
							<img src={teamLayout3} alt="Layout-3" />
						</div>
						<div
							className="sp-team-thums__thum"
							onClick={(e) => setLayout("fourth")}
						>
							<img src={teamLayout4} alt="Layout-4" />
						</div>
					</div>
				</PanelBody>
			</InspectorControls>
			<div className="sp-team">{teamLayoutFunction()}</div>
		</div>
	);
}

// const MY_TEMPLATE = [
// 	["create-block/team-image", {}],
// 	["create-block/team-info", { placeholder: "Inner Block Titel" }],
// 	["create-block/team-social", { placeholder: "Inner Block Paragraph" }],
// ];
