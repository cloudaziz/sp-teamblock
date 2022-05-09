import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";
import { Dashicon } from "@wordpress/components";

export default function save({ attributes }) {
	const {
		toggleField,
		twitterField,
		facebookField,
		youtubeField,
		emailField,
	} = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div className="sp-team__wrapper__body">
				{toggleField && (
					<div className="sp-team__wrapper__body__links sp-team__wrapper__body__links--sp-margin-bottom">
						{twitterField != "" ? (
							<a
								href={twitterField}
								target="_blank"
								className="sp-team__wrapper__body__links__social"
							>
								<Dashicon icon="twitter" />
							</a>
						) : (
							""
						)}

						{facebookField != "" ? (
							<a
								href={facebookField}
								target="_blank"
								className="sp-team__wrapper__body__links__social"
							>
								<Dashicon icon="facebook" />
							</a>
						) : (
							""
						)}
						{youtubeField != "" ? (
							<a
								href={youtubeField}
								target="_blank"
								className="sp-team__wrapper__body__links__social"
							>
								<Dashicon icon="youtube" />
							</a>
						) : (
							""
						)}
						{emailField != "" ? (
							<a
								href={emailField}
								target="_blank"
								className="sp-team__wrapper__body__links__social"
							>
								<Dashicon icon="email" />
							</a>
						) : (
							""
						)}
					</div>
				)}
			</div>
		</div>
	);
}
