import React from 'react';
import { connect } from 'react-redux';

import VerificationCard from '../verification-card/verification-card.component';
import styled from 'styled-components';
import {
	otpResendStart,
	verificationStart
} from '../../redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectVerified } from '../../redux/user/user.selectors';
import { Redirect } from 'react-router-dom';

export const EmailVerificationCard = styled.div``;

const EmailVerification = ({ verified, verification, resendVerification }) => {
	return verified ? (
		<Redirect to='/' />
	) : (
		<EmailVerificationCard>
			<VerificationCard
				verification={verification}
				resendVerification={resendVerification}
			/>
		</EmailVerificationCard>
	);
};

const mapStateToProps = createStructuredSelector({
	verified: selectVerified
});

const mapDispatchToProps = dispatch => ({
	verification: code => dispatch(verificationStart(code)),
	resendVerification: () => dispatch(otpResendStart())
});
export default connect(mapStateToProps, mapDispatchToProps)(EmailVerification);
