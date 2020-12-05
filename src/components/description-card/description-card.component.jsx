import React, { useState } from 'react';
import { useLoading } from '@agney/react-loading';

import {
	BodyText,
	CardBody,
	CardBodyContainer,
	CardImage,
	CardImageContainer,
	CardTitle,
	CardTitleContainer,
	DescriptionCardContainer,
	LineFx
} from './description-card.styles';
import SocialIcons from '../social-icons/social-icons.component';

const DescriptionCard = ({
	title,
	imageUrl,
	imageAlt = 'Card Image',
	text = [],
	size,
	socialmedia,
	children,
	position,
	linefx = true
}) => {
	const [loading, setloading] = useState(true);
	const { indicatorEl } = useLoading({
		loading,
		loaderProps: { className: 'avatar__image__loading' }
	});
	return (
		<DescriptionCardContainer>
			{title ? (
				<CardTitleContainer>
					<CardTitle size={size}>{title}</CardTitle>
					{linefx ? <LineFx /> : ''}
				</CardTitleContainer>
			) : (
				''
			)}
			{imageUrl || text ? (
				<CardBodyContainer>
					{imageUrl ? (
						<CardImageContainer>
							{indicatorEl}
							<CardImage
								width='100'
								height='100'
								onLoad={() => setloading(false)}
								src={imageUrl}
								alt={imageAlt}
							/>
						</CardImageContainer>
					) : (
						''
					)}
					{text ? (
						<CardBody>
							{text.map((para, key) => (
								<BodyText key={key} position={position}>
									{para}
								</BodyText>
							))}
							{children}
							{socialmedia ? <SocialIcons Usernames={socialmedia} /> : ''}
						</CardBody>
					) : (
						''
					)}
				</CardBodyContainer>
			) : (
				''
			)}
		</DescriptionCardContainer>
	);
};

export default DescriptionCard;
