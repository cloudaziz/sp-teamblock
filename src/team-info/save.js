import { __ } from "@wordpress/i18n";

import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title, designation, aboutme } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div className="sp-team__wrapper__body">
				<RichText.Content
					tagName="h3"
					className="sp-team__wrapper__body__name"
					value={title}
					placeholder={__("Enter your name...")}
				/>
				<RichText.Content
					tagName="div"
					className="sp-team__wrapper__body__position"
					value={designation}
					placeholder={__("Enter your designation...")}
				/>
				<RichText.Content
					tagName="p"
					className="sp-team__wrapper__body__about"
					value={aboutme}
					placeholder={__("Enter your about...")}
				/>
			</div>
		</div>
	);
}
