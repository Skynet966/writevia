import React from 'react';

import DescriptionCard from '../description-card/description-card.component';
import {
	Heading,
	Icon,
	IconatedInfoLinkContainer,
	InfoHeader,
	InfoItemList,
	InfoListItem,
	Link
} from './iconated-info-link.styles';

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
