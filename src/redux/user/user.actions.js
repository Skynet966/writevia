import UserActionTypes from './user.types';

export const localSignInStart = credentials => ({
	type: UserActionTypes.LOCAL_SIGN_IN_START,
	payload: credentials
});

export const signInSuccess = user => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: user
});

export const signInFailure = error => ({
	type: UserActionTypes.SIGN_IN_FAILURE,
	payload: error
});

export const signOutStart = () => ({
	type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
	type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
	type: UserActionTypes.SIGN_OUT_FAILURE,
	payload: error
});

export const signUpStart = credentials => ({
	type: UserActionTypes.SIGN_UP_START,
	payload: credentials
});

export const signUpSuccess = user => ({
	type: UserActionTypes.SIGN_UP_SUCCESS,
	payload: user
});

export const signUPFailure = error => ({
	type: UserActionTypes.SIGN_UP_FAILURE,
	payload: error
});

export const getCurrentUser = () => ({
	type: UserActionTypes.GET_CURRENT_USER
});

export const verificationStart = code => ({
	type: UserActionTypes.USER_VERIFICATION_START,
	payload: code
});

export const verificationSuccess = user => ({
	type: UserActionTypes.USER_VERIFICATION_SUCCESS,
	payload: user
});

export const verificationFailure = error => ({
	type: UserActionTypes.USER_VERIFICATION_FAILURE,
	payload: error
});

export const verificationCodeResend = () => ({
	type: UserActionTypes.VERIFICATION_CODE_RESEND_START
});

export const verificationCodeResendFailure = error => ({
	type: UserActionTypes.VERIFICATION_CODE_RESEND_FAILURE,
	payload: error
});

export const passwordRecoveryStart = email => ({
	type: UserActionTypes.PASSWORD_RECOVERY_START,
	payload: email
});

export const passwordRecoverySuccess = message => ({
	type: UserActionTypes.PASSWORD_RECOVERY_SUCCESS,
	payload: message
});

export const passwordRecoveryFailure = error => ({
	type: UserActionTypes.PASSWORD_RECOVERY_FAILURE,
	payload: error
});

export const passwordRecoveryVerificationStart = code => ({
	type: UserActionTypes.PASSWORD_RECOVERY_VERIFICATION_START,
	payload: code
});

export const passwordRecoveryVerificationSuccess = user => ({
	type: UserActionTypes.PASSWORD_RECOVERY_VERIFICATION_SUCCESS,
	payload: user
});

export const passwordRecoveryVerificationFailure = error => ({
	type: UserActionTypes.PASSWORD_RECOVERY_VERIFICATION_FAILURE,
	payload: error
});

export const passwordResetStart = password => ({
	type: UserActionTypes.PASSWORD_RESET_START,
	payload: password
});

export const passwordResetSuccess = user => ({
	type: UserActionTypes.PASSWORD_RESET_SUCCESS,
	payload: user
});

export const passwordResetFailure = error => ({
	type: UserActionTypes.PASSWORD_RESET_FALIUR,
	payload: error
});
