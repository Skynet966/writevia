import React from 'react';

import DescriptionCard from '../description-card/description-card.component';

import styled, { keyframes } from 'styled-components';

export const CallAnimation = keyframes`
	0%
        {transform: rotate(10deg)}
    10%
        {transform: rotate(-10deg)}
    20%
        {transform: rotate(10deg)}
    30%
        {transform: rotate(-10deg)}
    40%
        {transform: rotate(10deg)}
    50%
        {transform: rotate(10deg)}
    60%
        {transform: rotate(10deg)}
    70%
        {transform: rotate(-10deg)}
    80%
        {transform: rotate(10deg)}
    90%
        {transform: rotate(-10deg)}
    100%
        {transform: rotate(10deg)}
`;

export const IconatedInfoLinkContainer = styled.div`
	text-align: left;
`;
export const InfoHeader = styled.div``;
export const Heading = styled.h4`
	margin-top: 0;
	color: ${props => props.theme.Muted};
	font-weight: 500;
`;
export const InfoItemList = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-flow: column;
	gap: 20px;
`;
export const InfoListItem = styled.li``;
export const Link = styled.a`
	font-size: 1em;
	font-weight: 500;
	align-self: center;
	transition: color 0.3s linear;
	${InfoListItem}:hover & {
		color: ${props => props.theme.Primary};
	}
`;
export const Icon = styled.i`
	left: 0;
	top: 0;
	width: 40px;
	text-align: center;
	height: 40px;
	background: #fff;
	color: #ee4266;
	border: 1px solid #e8eaed;
	line-height: 40px;
	border-radius: 50%;
	transition: box-shadow 0.3s linear;
	margin-right: 10px;
	${InfoListItem}:hover & {
		box-shadow: 0 0 5px ${props => props.theme.Primary};
		animation: ${CallAnimation} 1s linear infinite;
	}
`;

const IconatedInfoLink = ({
	title,
	heading,
	phone,
	email,
	location: { name, link }
}) => (
	<DescriptionCard title={title} size='large'>
		<IconatedInfoLinkContainer>
			<InfoHeader>
				<Heading>{heading}</Heading>
			</InfoHeader>
			<InfoItemList>
				<InfoListItem>
					<Link href={`tel:${phone}`}>
						<Icon className='fa fa-phone' />
						{phone}
					</Link>
				</InfoListItem>
				<InfoListItem>
					<Link href={`mailto:${email}`}>
						<Icon className='fa fa-envelope' />
						{email}
					</Link>
				</InfoListItem>
				<InfoListItem>
					<Link href={link} target='_blank'>
						<Icon className='fa fa-map-marker' />
						{name}
					</Link>
				</InfoListItem>
			</InfoItemList>
		</IconatedInfoLinkContainer>
	</DescriptionCard>
);

export default IconatedInfoLink;
