import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import ButtonInput from '../button-input/button-input.component';
import DescriptionCard from '../description-card/description-card.component';
import SocialLogin from '../social-login/social-login.component';
import {
	ForgotPasswordContainer,
	LoginFormContainer,
	SocialLineBreak
} from './login-form.styles';

import { localSignInStart } from '../../redux/user/user.actions';
import { TextAndLink, TextLink } from '../gnup-form/gnup-form.styles';
import { Form } from '../../App.styles';

const LoginForm = ({ localSignIn }) => {
	const [credentials, setCredentials] = useState({
		username: '',
		password: ''
	});
	const { username, password } = credentials;
	const handleChange = event => {
		const { name, value } = event.target;
		setCredentials({ ...credentials, [name]: value });
	};
	const handleSubmit = event => {
		event.preventDefault();
		localSignIn(credentials);
	};
	return (
		<LoginFormContainer>
			<SocialLogin />
			<SocialLineBreak />
			<DescriptionCard title='OR Login with your credentials' linefx={false}>
				<Form onSubmit={handleSubmit}>
					<FormInput
						type='text'
						name='username'
						value={username}
						handleChange={handleChange}
						placeholder='username or email'
						required
					/>
					<FormInput
						type='password'
						value={password}
						name='password'
						handleChange={handleChange}
						placeholder='password'
						required
					/>
					<ForgotPasswordContainer>
						<Link to='/user/password-recovery'>Forgot your password?</Link>
					</ForgotPasswordContainer>
					<ButtonInput type='submit' text='Login' />
				</Form>
				<TextAndLink>
					Have not registred yet?{' '}
					<TextLink to='/user/register'>Register here</TextLink>
				</TextAndLink>
			</DescriptionCard>
		</LoginFormContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	localSignIn: ({ username, password }) =>
		dispatch(localSignInStart({ username: username, password: password }))
});

export default connect(null, mapDispatchToProps)(LoginForm);
