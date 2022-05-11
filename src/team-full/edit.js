import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from "@wordpress/block-editor";

import { PanelBody } from "@wordpress/components";

import { useState } from "@wordpress/element";

import "./editor.scss";

import teamLayout1 from "./images/layout-1.svg";
import teamLayout2 from "./images/layout-2.svg";
import teamLayout3 from "./images/layout-3.svg";
import teamLayout4 from "./images/layout-4.svg";

const TEAM_IMAGE = [
	["create-block/team-image", {}],
	["create-block/team-info", {}],
	["create-block/team-social", {}],
];

export default function Edit({ attributes, setAttributes }) {
	const { teamLayout } = attributes;

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
						<div className="sp-team__wrapper sp-team__wrapper--sp-padding">
							<InnerBlocks template={TEAM_IMAGE} templateLock="insert" />
						</div>
					</div>
				);
			case "third":
				return (
					<div className="sp-team sp-team--radius">
						<div className="sp-team__wrapper sp-team__wrapper--sp-padding">
							<InnerBlocks template={TEAM_IMAGE} templateLock="insert" />
						</div>
					</div>
				);
			case "fourth":
				return (
					<div className="sp-team sp-team--radius">
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
			{teamLayoutFunction()}
		</div>
	);
}

// const MY_TEMPLATE = [
// 	["create-block/team-image", {}],
// 	["create-block/team-info", { placeholder: "Inner Block Titel" }],
// 	["create-block/team-social", { placeholder: "Inner Block Paragraph" }],
// ];
