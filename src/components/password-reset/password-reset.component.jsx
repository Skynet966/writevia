import React, { useState } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { passwordResetStart } from '../../redux/user/user.actions';
import ButtonInput from '../button-input/button-input.component';
import FormInput from '../form-input/form-input.component';
import { PasswordRecoveryCard } from '../password-recovery/password-recovery.component';

export const PasswordResetContainer = styled(PasswordRecoveryCard)``;

const PasswordReset = ({ resetPassword }) => {
	const [password, setPassword] = useState('');
	const [cpassword, setCPassword] = useState(false);

	const handlePassword = ({ target: { value } }) => setPassword(value);
	const handleCPassword = ({ target: { value, style } }) => {
		if (value === password) {
			setCPassword(true);
			style.color = 'green';
		} else {
			setCPassword(false);
			style.color = 'red';
		}
	};

	const handleSubmit = event => {
		event.preventDefault();
		cpassword
			? resetPassword(password)
			: console.log("Password don't matched!");
	};
	return (
		<PasswordResetContainer onSubmit={handleSubmit}>
			<FormInput
				type='password'
				handleChange={handlePassword}
				placeholder='New Password'
				required
			/>
			<FormInput
				type='password'
				handleChange={handleCPassword}
				placeholder='Confirm Password'
				required
			/>
			<ButtonInput type='submit' text='Reset Password' />
		</PasswordResetContainer>
	);
};
const mapDispatchToProps = dispatch => ({
	resetPassword: password => dispatch(passwordResetStart(password))
});

export default connect(null, mapDispatchToProps)(PasswordReset);
