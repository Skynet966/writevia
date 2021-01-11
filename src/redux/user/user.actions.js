import UserActionTypes from './user.types';

//ERROR HANDLING
export const errorHandling = error => ({
	type: UserActionTypes.ERROR_HANDLING,
	payload: error
});

//lOCAL SIGNIN
export const localSignInStart = credentials => ({
	type: UserActionTypes.LOCAL_SIGN_IN_START,
	payload: credentials
});
export const signInSuccess = data => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: data
});
export const signInFailure = data => ({
	type: UserActionTypes.SIGN_IN_FAILURE,
	payload: data
});

//GET CURRENT USER
export const getCurrentUserStart = () => ({
	type: UserActionTypes.GET_CURRENT_USER_START
});
export const getCurrentUserSuccess = data => ({
	type: UserActionTypes.GET_CURRENT_USER_SUCCESS,
	payload: data
});
export const getCurrentUserFailure = data => ({
	type: UserActionTypes.GET_CURRENT_USER_FAILURE,
	payload: data
});

//LOGOUT
export const signOutStart = () => ({
	type: UserActionTypes.SIGN_OUT_START
});
export const signOutSuccess = data => ({
	type: UserActionTypes.SIGN_OUT_SUCCESS,
	payload: data
});
export const signOutFailure = data => ({
	type: UserActionTypes.SIGN_OUT_FAILURE,
	payload: data
});

//SIGNUP START
export const signUpStart = credentials => ({
	type: UserActionTypes.SIGN_UP_START,
	payload: credentials
});
export const signUpSuccess = data => ({
	type: UserActionTypes.SIGN_UP_SUCCESS,
	payload: data
});
export const signUPFailure = data => ({
	type: UserActionTypes.SIGN_UP_FAILURE,
	payload: data
});

//EMAIL VERIFICATION
export const verificationStart = code => ({
	type: UserActionTypes.EMAIL_VERIFICATION_START,
	payload: code
});
export const verificationSuccess = data => ({
	type: UserActionTypes.EMAIL_VERIFICATION_SUCCESS,
	payload: data
});
export const verificationFailure = data => ({
	type: UserActionTypes.EMAIL_VERIFICATION_FAILURE,
	payload: data
});

//OTP RESEND
export const otpResendStart = () => ({
	type: UserActionTypes.OTP_RESEND_START
});
export const otpResendSuccess = data => ({
	type: UserActionTypes.OTP_RESEND_SUCCESS,
	payload: data
});
export const otpResendFailure = data => ({
	type: UserActionTypes.OTP_RESEND_FAILURE,
	payload: data
});

//PASSWORD RECOVERY PROCESS
export const passwordRecoveryStart = email => ({
	type: UserActionTypes.PASSWORD_RECOVERY_START,
	payload: email
});
export const passwordRecoverySuccess = data => ({
	type: UserActionTypes.PASSWORD_RECOVERY_SUCCESS,
	payload: data
});
export const passwordRecoveryFailure = data => ({
	type: UserActionTypes.PASSWORD_RECOVERY_FAILURE,
	payload: data
});

//PASSWORD RECOVERY VERIFICATION
export const passwordRecoveryVerificationStart = code => ({
	type: UserActionTypes.RECOVERY_VERIFICATION_START,
	payload: code
});
export const passwordRecoveryVerificationSuccess = data => ({
	type: UserActionTypes.RECOVERY_VERIFICATION_SUCCESS,
	payload: data
});
export const passwordRecoveryVerificationFailure = data => ({
	type: UserActionTypes.RECOVERY_VERIFICATION_FAILURE,
	payload: data
});

//PASSWORD RESET
export const passwordResetStart = password => ({
	type: UserActionTypes.PASSWORD_RESET_START,
	payload: password
});
export const passwordResetSuccess = data => ({
	type: UserActionTypes.PASSWORD_RESET_SUCCESS,
	payload: data
});
export const passwordResetFailure = data => ({
	type: UserActionTypes.PASSWORD_RESET_FALIUR,
	payload: data
});

//CLEAR RESPONSE
export const clearResponse = () => ({
	type: UserActionTypes.CLEAR_RESPONSE
});
