import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { passwordRecoveryVerificationStart } from '../../redux/user/user.actions';
import VerificationCard from '../verification-card/verification-card.component';

export const PasswordRecoveryVerificationContainer = styled.div``;

const PasswordRecoveryVerification = ({ verification }) => (
	<PasswordRecoveryVerificationContainer>
		<VerificationCard verification={verification} />
	</PasswordRecoveryVerificationContainer>
);

const mapDispatchToProps = dispatch => ({
	verification: code => dispatch(passwordRecoveryVerificationStart(code))
});

export default connect(null, mapDispatchToProps)(PasswordRecoveryVerification);
