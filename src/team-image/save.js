import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { teamImage } = attributes;
	return (
		<div>
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
