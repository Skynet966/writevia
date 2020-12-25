import React, { useState } from 'react';

import styled from 'styled-components';
import ButtonInput from '../button-input/button-input.component';
import FormInput from '../form-input/form-input.component';
import { PasswordRecoveryCard } from '../password-recovery/password-recovery.component';
import { TextAndLink, TextLink } from '../Signup-form/signup-form.styles';

export const VerificationCardContainer = styled(PasswordRecoveryCard)``;
export const ResendBtn = styled(TextLink)`
	cursor: pointer;
`;
const VerificationCard = ({ verification, resendVerification }) => {
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
		<VerificationCardContainer onSubmit={handleSubmit}>
			<FormInput
				type='number'
				handleChange={handleChange}
				placeholder='Enter verification code'
				required
			/>
			<ButtonInput type='submit' text='Verify' />
			{resendVerification ? (
				<TextAndLink>
					Resend Code?{' '}
					<ResendBtn as='a' onClick={handleClick}>
						Click here
					</ResendBtn>
				</TextAndLink>
			) : (
				''
			)}
		</VerificationCardContainer>
	);
};
export default VerificationCard;
