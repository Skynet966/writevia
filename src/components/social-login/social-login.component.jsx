import React from 'react';

import { ReactComponent as GoogleLogo } from '../../assets/images/icons/google.svg';
import { ReactComponent as FacebookLogo } from '../../assets/images/icons/facebook.svg';

import styled from 'styled-components';

import { Button } from '../button-input/button-input.component';

export const SocialLoginContainer = styled.div`
	display: flex;
	padding: 15px 0 0;
	flex-flow: column;
	place-content: space-between;
`;

export const SocialBtn = styled(Button)`
	margin: 10px 0;
	font-weight: 800;
	padding: 10px;
	text-align-last: center;
`;

export const LogoContainer = styled.span`
	padding: 0 10px;
`;

export const TextContainer = styled.span`
	color: ${({ theme }) => theme.BodyText};
`;
const url =
	!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
		? 'http://localhost:3000'
		: 'https://writevia-backend.herokuapp.com';
const SocialLogin = () => (
	<SocialLoginContainer>
		<SocialBtn
			media='google'
			onClick={() => window.open(`${url}/auth/google/login`, '_self')}
		>
			<LogoContainer>
				<GoogleLogo />
			</LogoContainer>
			Continue with Google
		</SocialBtn>
		<SocialBtn
			media='facebook'
			onClick={() => window.open(`${url}/auth/facebook/login`, '_self')}
		>
			<LogoContainer>
				<FacebookLogo />
			</LogoContainer>
			Continue with Facebook
		</SocialBtn>
		<TextContainer className='text-left'>
			By continuing, you agree to Writevia's{' '}
			<strong>Terms or Service, Privacy Policy</strong>
		</TextContainer>
	</SocialLoginContainer>
);

export default SocialLogin;
