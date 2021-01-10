import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PasswordReset from '../../components/password-reset/password-reset.component';
import PasswordRecoveryVerification from '../../components/password-recovery-verifciation/password-recovery-verification.component';
import PasswordRecoveryEmail from '../../components/password-recovery-email/password-recovery-email.component';
import { selectRecovery } from '../../redux/user/user.selectors';

const PasswordRecovery = ({ recovery }) => {
	return recovery.status ? (
		recovery.reset ? (
			<PasswordReset />
		) : (
			<PasswordRecoveryVerification />
		)
	) : (
		<PasswordRecoveryEmail />
	);
};

const mapStateToProps = createStructuredSelector({
	recovery: selectRecovery
});

export default connect(mapStateToProps)(PasswordRecovery);
