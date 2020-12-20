import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getCurrentUser, signUpStart } from '../../redux/user/user.actions';

import DescriptionCard from '../description-card/description-card.component';
import FormInput from '../form-input/form-input.component';
import ButtonInput from '../button-input/button-input.component';

import {
	CheckBox,
	CheckBoxContainer,
	CheckBoxLabel,
	SignUpFormContainer,
	TextAndLink,
	TextLink
} from './signup-form.styles';

const SignUpForm = ({ signUp, getUser }) => {
	const [userInformation, setUserInformation] = useState({
		username: '',
		email: '',
		password: '',
		name: ''
	});
	const [isCPassCorrect, setIsCPassCorrect] = useState(true);

	const handleChange = ({ target: { name, value } }) => {
		setUserInformation({ ...userInformation, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (isCPassCorrect) signUp(userInformation);
	};

	const handleCPassword = ({ target: { value, style } }) => {
		if (value === userInformation.password) {
			setIsCPassCorrect(true);
			style.color = 'green';
		} else {
			setIsCPassCorrect(false);
			style.color = 'red';
		}
	};
	return (
		<SignUpFormContainer onSubmit={handleSubmit}>
			<DescriptionCard title='Register yourself with us.'>
				<FormInput
					type='text'
					name='name'
					placeholder='Full Name'
					handleChange={handleChange}
					required
				/>
				<FormInput
					type='text'
					name='username'
					placeholder='Username'
					handleChange={handleChange}
					required
				/>
				<FormInput
					type='email'
					name='email'
					placeholder='Email'
					handleChange={handleChange}
					required
				/>
				<FormInput
					type='password'
					name='password'
					placeholder='Password'
					handleChange={handleChange}
					required
				/>
				<FormInput
					type='password'
					name='cpassword'
					placeholder='Confirm Password'
					handleChange={handleCPassword}
					required
				/>
				<CheckBoxContainer>
					<CheckBox id='aggrement' required />
					<CheckBoxLabel htmlFor='aggrement'>
						By checking it, you agree to Writevia's{' '}
						<strong>Terms or Service, Privacy Policy</strong>
					</CheckBoxLabel>
				</CheckBoxContainer>
				<ButtonInput type='submit' text='Sign Up' />
				<TextAndLink>
					If you already have an account?{' '}
					<TextLink to='/user/login'>Login here</TextLink>
				</TextAndLink>
			</DescriptionCard>
		</SignUpFormContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	signUp: userInformation => dispatch(signUpStart(userInformation)),
	getUser: () => dispatch(getCurrentUser())
});

export default connect(null, mapDispatchToProps)(SignUpForm);
