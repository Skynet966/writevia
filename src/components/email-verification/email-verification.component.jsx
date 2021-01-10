import React from 'react';
import { connect } from 'react-redux';

import VerificationCard from '../verification-card/verification-card.component';
import styled from 'styled-components';
import {
	otpResendStart,
	verificationStart
} from '../../redux/user/user.actions';

export const EmailVerificationCard = styled.div``;

const EmailVerification = ({ verification, resendVerification }) => (
	<EmailVerificationCard>
		<VerificationCard
			verification={verification}
			resendVerification={resendVerification}
		/>
	</EmailVerificationCard>
);

const mapDispatchToProps = dispatch => ({
	verification: code => dispatch(verificationStart(code)),
	resendVerification: () => dispatch(otpResendStart())
});
export default connect(null, mapDispatchToProps)(EmailVerification);
