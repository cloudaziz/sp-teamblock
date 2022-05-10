import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { teamImage } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<h1>Full Block</h1>
		</div>
	);
}
