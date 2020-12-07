import React from 'react';

import styled from 'styled-components';
import { color, screenSize } from '../../App.styles';

import { NavLink } from '../footer-navbar/footer-navbar.component';

export const FooterCopywriteContainer = styled.div`
	display: flex;
	flex-flow: row;
	margin: 18px auto;
	@media (max-width: ${screenSize.md}) {
		justify-content: center;
	}
`;
export const CopywriteMsg = styled.h4`
	margin: 0;
	color: ${color.megan};
`;

const Copywrite = () => (
	<FooterCopywriteContainer>
		<CopywriteMsg>
			Copyright ©2020 All rights reserved | by{' '}
			<NavLink to='/'>Writevia</NavLink>
		</CopywriteMsg>
	</FooterCopywriteContainer>
);

export default Copywrite;
