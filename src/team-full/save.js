import { __ } from "@wordpress/i18n";

import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { teamLayout } = attributes;

	const teamLayoutFunction = () => {
		switch (teamLayout) {
			case "default":
				return (
					<div className="sp-team">
						<InnerBlocks.Content />
					</div>
				);
			case "second":
				return (
					<div className="sp-team">
						<div className="sp-team__wrapper sp-team__wrapper--sp-padding">
							<InnerBlocks.Content />
						</div>
					</div>
				);
			case "third":
				return (
					<div className="sp-team sp-team--radius">
						<InnerBlocks.Content />
					</div>
				);
			case "fourth":
				return (
					<div className="sp-team sp-team--radius">
						<InnerBlocks.Content />
					</div>
				);
			default:
				return <h1>No project match</h1>;
		}
	};

	return <div {...useBlockProps.save()}>{teamLayoutFunction()}</div>;
}
