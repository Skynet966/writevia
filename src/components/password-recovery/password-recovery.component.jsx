import React, { useState } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { screenSize } from '../../App.styles';
import { passwordRecoveryStart } from '../../redux/user/user.actions';
import ButtonInput from '../button-input/button-input.component';
import FormInput from '../form-input/form-input.component';
import {
	SignUpFormContainer,
	TextAndLink,
	TextLink
} from '../Signup-form/signup-form.styles';

export const PasswordRecoveryCard = styled(SignUpFormContainer)`
	margin-bottom: 32vh;
	@media (max-width: ${screenSize.sm}) {
		margin-bottom: 22vh;
	}
`;

const PasswordRecovery = ({ recoverPassword }) => {
	const [email, setEmail] = useState('');
	const handleChange = ({ target: { value } }) => {
		setEmail(value);
	};
	const handleSubmit = event => {
		event.preventDefault();
		recoverPassword(email);
	};
	return (
		<PasswordRecoveryCard onSubmit={handleSubmit}>
			<FormInput
				type='email'
				placeholder='Registred email'
				value={email}
				handleChange={handleChange}
				required
			/>
			<ButtonInput type='submit' text='Recover Password' />
			<TextAndLink>
				Remeber you password? <TextLink to='/user/login'>Login here</TextLink>
			</TextAndLink>
		</PasswordRecoveryCard>
	);
};

const mapDispatchToProps = dispatch => ({
	recoverPassword: email => dispatch(passwordRecoveryStart(email))
});

export default connect(null, mapDispatchToProps)(PasswordRecovery);
