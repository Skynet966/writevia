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
