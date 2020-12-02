import React from 'react';

import {
	SocialIconsContainer,
	IconsList,
	ListIcon,
	IconLink
} from './social-icons.styles';

const SocialMediaURL = {
	facebook: 'https://www.facebook.com/',
	twitter: 'https://twitter.com/',
	instagram: 'https://www.instagram.com/',
	linkedin: 'https://www.linkedin.com/',
	pinterest: 'https://in.pinterest.com/',
	youtube: 'https://www.youtube.com/',
	github: 'https://github.com/'
};

const SocialIcons = ({
	Usernames = {
		facebook: '',
		twitter: '',
		instagram: '',
		linkedin: '',
		pinterest: '',
		youtube: '',
		github: ''
	},
	width,
	sm_display
}) => {
	let userNames = Object.entries(Usernames);
	return (
		<SocialIconsContainer width={width} sm_display={sm_display}>
			<IconsList width={width}>
				{userNames.map(([media, username]) =>
					username ? (
						<ListIcon key={media}>
							<IconLink
								className={`fa fa-${media}`}
								href={`${SocialMediaURL[media]}${username}`}
								target='_blank'
								rel='noreferrer'
							/>
						</ListIcon>
					) : (
						''
					)
				)}
			</IconsList>
		</SocialIconsContainer>
	);
};

export default SocialIcons;
