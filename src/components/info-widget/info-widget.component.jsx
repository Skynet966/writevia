import React from 'react';
import { Link } from 'react-router-dom';

import SocialIcons from '../social-icons/social-icons.component';

import styled from 'styled-components';
import { size } from '../../assets/base-config/base-config.styles';
export const InfoWidgetContainer = styled.div`
	display: flex;
	flex-flow: column;
	padding: 15px;
`;
export const WidgetHeader = styled.div`
	display: flex;
	margin-bottom: 10px;
`;
export const LogoContainer = styled(Link)``;
export const Logo = styled.img`
	width: 150px;
	@media (max-width: ${size.sm}) {
		width: 120px;
	}
`;
export const WidgetBody = styled.div`
	display: flex;
	flex-flow: column;
	text-align: left;
`;
export const BodyText = styled.p`
	font-weight: 500;
`;
export const WidgetFooter = styled.div`
	display: flex;
`;

const InfoWidget = ({ imageUrl, imageAlt = 'Widget Logo', text = [] }) => (
	<InfoWidgetContainer>
		<WidgetHeader>
			<LogoContainer to='/'>
				<Logo src={imageUrl} alt={imageAlt} width='150' />
			</LogoContainer>
		</WidgetHeader>
		<WidgetBody>
			{text.map((txt, key) => (
				<BodyText key={key}>{txt}</BodyText>
			))}
		</WidgetBody>
		<WidgetFooter>
			<SocialIcons
				Usernames={{
					facebook: 'writevia',
					twitter: 'writevia',
					instagram: 'writevia'
				}}
				rounded='true'
			/>
		</WidgetFooter>
	</InfoWidgetContainer>
);

export default InfoWidget;
