import React from 'react';

import SocialIcons from '../social-icons/social-icons.component';
import {
	BodyText,
	InfoWidgetContainer,
	Logo,
	LogoContainer,
	WidgetBody,
	WidgetFooter,
	WidgetHeader
} from './info-widget.styles';

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
