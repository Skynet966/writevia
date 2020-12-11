import React from 'react';

import FormInput from '../form-input/form-input.component';
import ButtonInput from '../button-input/button-input.component';
import DescriptionCard from '../description-card/description-card.component';

import styled from 'styled-components';
import SocialLogin from '../social-login/social-login.component';
import { Link } from 'react-router-dom';

export const LoginFormContainer = styled.div`
	text-align-last: left;
	padding: 30px;
	border: 1px solid ${({ theme }) => theme.LineFX};
	border-radius: 5px;
	background: ${({ theme }) => theme.Header};
`;
export const ForgotPasswordContainer = styled.div`
	padding-left: 5px;
	margin: -15px 0 15px;
`;

export const SocialLineBreak = styled.hr`
	height: 2px !important;
	color: ${({ theme }) => theme.Shadow};
`;

const LoginForm = () => (
	<LoginFormContainer>
		<SocialLogin />
		<SocialLineBreak />
		<DescriptionCard title='OR Login with your credentials' linefx={false}>
			<FormInput type='text' name='username' placeholder='username or email' />
			<FormInput type='password' name='password' placeholder='password' />
			<ForgotPasswordContainer>
				<Link to='/passwordRecovery'>Forgot your password?</Link>
			</ForgotPasswordContainer>
			<ButtonInput text='Login' />
		</DescriptionCard>
	</LoginFormContainer>
);

export default LoginForm;
