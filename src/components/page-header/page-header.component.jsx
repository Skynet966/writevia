import React from 'react';

import {
	Heading,
	HeadingContainer,
	PageHeaderContainer,
	SubHeading
} from './page-header.styles';

const PageHeader = ({ title, subtitle }) => (
	<PageHeaderContainer>
		<HeadingContainer>
			<Heading>{title}</Heading>
			<SubHeading>{subtitle}</SubHeading>
		</HeadingContainer>
	</PageHeaderContainer>
);

export default PageHeader;
