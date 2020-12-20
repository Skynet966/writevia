import React from 'react';

import styled from 'styled-components';
import AuthNavbar from '../../components/auth-navbar/auth-navbar.component';

export const AuthHeaderContainer = styled.header``;

const AuthHeader = () => (
	<AuthHeaderContainer className='container'>
		<AuthNavbar />
	</AuthHeaderContainer>
);

export default AuthHeader;
