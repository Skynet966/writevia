import React from 'react';

import {
	SocialMediaContainer,
	SocialMediaIcon,
	SocialMediaItem,
	SocialMediaList
} from './social-media.styles';

const SocialMediaURL = {
	facebook: 'https://www.facebook.com/',
	twitter: 'https://twitter.com/',
	instagram: 'https://www.instagram.com/',
	linkedin: 'https://www.linkedin.com/',
	pinterest: 'https://in.pinterest.com/',
	youtube: 'https://www.youtube.com/',
	github: 'https://github.com/'
};

const SocialMedia = ({
	Usernames = {
		facebook: '',
		twitter: '',
		instagram: '',
		linkedin: '',
		pinterest: '',
		youtube: '',
		github: ''
	}
}) => {
	let userNames = Object.entries(Usernames);
	return (
		<SocialMediaContainer>
			<SocialMediaList>
				{userNames.map(([media, username]) =>
					username ? (
						<SocialMediaItem key={media}>
							<SocialMediaIcon
								className={`fa fa-${media}`}
								href={`${SocialMediaURL[media]}${username}`}
								target='_blank'
								rel='noreferrer'
							/>
						</SocialMediaItem>
					) : (
						''
					)
				)}
			</SocialMediaList>
		</SocialMediaContainer>
	);
};

export default SocialMedia;
