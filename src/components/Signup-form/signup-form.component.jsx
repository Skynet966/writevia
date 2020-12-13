import React, { useState } from 'react';

import DescriptionCard from '../description-card/description-card.component';
import FormInput from '../form-input/form-input.component';

import styled from 'styled-components';
import ButtonInput from '../button-input/button-input.component';
import { getCurrentUser, signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

export const SignUpFormContainer = styled.div`
	padding: 30px;
	border: 1px solid ${({ theme }) => theme.LineFX};
	border-radius: 5px;
	background: ${({ theme }) => theme.Header};
`;

const SignUpForm = ({ signUp, getUser }) => {
	const [userInformation, setUserInformation] = useState({
		username: '',
		email: '',
		password: '',
		name: ''
	});

	const handleChange = event => {
		const { name, value } = event.target;
		setUserInformation({ ...userInformation, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		signUp(userInformation);
	};
	return (
		<SignUpFormContainer>
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
				<ButtonInput text='Sign Up' handleClick={handleSubmit} />
				<ButtonInput text='get user' handleClick={() => getUser()} />
			</DescriptionCard>
		</SignUpFormContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	signUp: userInformation => dispatch(signUpStart(userInformation)),
	getUser: () => dispatch(getCurrentUser())
});

export default connect(null, mapDispatchToProps)(SignUpForm);
