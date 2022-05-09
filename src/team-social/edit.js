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
	const {
		toggleField,
		twitterField,
		facebookField,
		youtubeField,
		emailField,
	} = attributes;

	return (
		<div>
			<InspectorControls>
				<PanelBody title="Social Icon Setting" initialOpen={true}>
					<ToggleControl
						label="Enable Social Links"
						checked={toggleField}
						onChange={(newToggleField) =>
							setAttributes({ toggleField: newToggleField })
						}
					/>

					<PanelBody title="Twitter" initialOpen={false}>
						<TextControl
							label="Enter URL"
							help="Start with http://"
							value={twitterField}
							onChange={(newTwitterField) =>
								setAttributes({ twitterField: newTwitterField })
							}
						/>
					</PanelBody>

					<PanelBody title="Facebook" initialOpen={false}>
						<TextControl
							label="Enter URL"
							help="Start with http://"
							value={facebookField}
							onChange={(newFacebookField) =>
								setAttributes({ facebookField: newFacebookField })
							}
						/>
					</PanelBody>

					<PanelBody title="YouTube" initialOpen={false}>
						<TextControl
							label="Enter URL"
							help="Start with http://"
							value={youtubeField}
							onChange={(newYoutubeField) =>
								setAttributes({ youtubeField: newYoutubeField })
							}
						/>
					</PanelBody>

					<PanelBody title="Email" initialOpen={false}>
						<TextControl
							label="Enter your email"
							help="example: abc@gmail.com"
							value={emailField}
							onChange={(newEmailField) => {
								setAttributes({ emailField: newEmailField });
							}}
						/>
					</PanelBody>
				</PanelBody>
			</InspectorControls>
			<div className="sp-team__wrapper__social">
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
