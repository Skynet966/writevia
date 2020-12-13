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

import { localSignInStart, signOutStart } from '../../redux/user/user.actions';

const LoginForm = ({ localSignIn, signOut }) => {
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
					<Link to='/passwordRecovery'>Forgot your password?</Link>
				</ForgotPasswordContainer>
				<ButtonInput text='Login' handleClick={handleSubmit} />
				<ButtonInput text='Logout' handleClick={() => signOut()} />
			</DescriptionCard>
		</LoginFormContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	localSignIn: ({ username, password }) =>
		dispatch(localSignInStart({ username: username, password: password })),
	signOut: () => dispatch(signOutStart())
});

export default connect(null, mapDispatchToProps)(LoginForm);
