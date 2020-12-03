import React from 'react';
import {
	Social,
	SocialBlock,
	SocialContainer,
	SocialWidgetContainer
} from './social-widget.styles';

const SocialWidget = ({
	views = {
		facebook: '21k',
		twitter: '31k',
		instagram: '62k',
		linkedin: '',
		pinterest: '',
		youtube: '',
		github: ''
	}
}) => {
	const socialViews = Object.entries(views);
	return (
		<SocialWidgetContainer>
			<SocialContainer>
				{socialViews.map(([media, views]) =>
					views ? (
						<SocialBlock key={media} media={media}>
							<Social className={`fa fa-${media}`}>{views}</Social>
						</SocialBlock>
					) : (
						''
					)
				)}
			</SocialContainer>
		</SocialWidgetContainer>
	);
};

export default SocialWidget;
