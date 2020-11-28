import React from 'react';

import SocialMedia from '../social-media/social-media.component';

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

const DescriptionCard = ({
	title,
	imageUrl,
	imageAlt = 'Card Image',
	text = [],
	size,
	socialmedia,
	children,
	position
}) => (
	<DescriptionCardContainer>
		{title ? (
			<CardTitleContainer>
				<CardTitle size={size}>{title}</CardTitle>
				<LineFx />
			</CardTitleContainer>
		) : (
			''
		)}
		{imageUrl || text ? (
			<CardBodyContainer>
				{imageUrl ? (
					<CardImageContainer>
						<CardImage src={imageUrl} alt={imageAlt} />
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
						{socialmedia ? <SocialMedia Usernames={socialmedia} /> : ''}
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

export default DescriptionCard;
