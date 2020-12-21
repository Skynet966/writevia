import React, { useState } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import {
	verificationCodeResend,
	verificationStart
} from '../../redux/user/user.actions';
import ButtonInput from '../button-input/button-input.component';
import FormInput from '../form-input/form-input.component';
import { PasswordRecoveryCard } from '../password-recovery/password-recovery.component';
import { TextAndLink, TextLink } from '../Signup-form/signup-form.styles';

export const EmailVerificationCard = styled(PasswordRecoveryCard)``;
export const ResendBtn = styled(TextLink)`
	cursor: pointer;
`;
const EmailVerification = ({ verification, resendVerification }) => {
	const [code, setCode] = useState();
	const handleChange = ({ target: { value } }) => {
		setCode(value);
	};
	const handleSubmit = event => {
		event.preventDefault();
		verification(code);
	};
	const handleClick = event => {
		event.preventDefault();
		resendVerification();
	};
	return (
		<EmailVerificationCard onSubmit={handleSubmit}>
			<FormInput
				type='number'
				handleChange={handleChange}
				placeholder='Enter Verification Code'
				required
			/>
			<ButtonInput type='submit' text='Verify' />
			<TextAndLink>
				Resend Code?{' '}
				<ResendBtn as='a' onClick={handleClick}>
					Click here
				</ResendBtn>
			</TextAndLink>
		</EmailVerificationCard>
	);
};
const mapDispatchToProps = dispatch => ({
	verification: code => dispatch(verificationStart(code)),
	resendVerification: () => dispatch(verificationCodeResend())
});
export default connect(null, mapDispatchToProps)(EmailVerification);
