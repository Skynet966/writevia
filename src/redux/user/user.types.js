const UserActionTypes = {
	//SERVER ERROR HANDLING
	ERROR_HANDLING: 'ERROR_HANDLING',

	//LOCAL SIGNIN PROCESS
	LOCAL_SIGN_IN_START: 'LOCAL_SIGN_IN_START',
	SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
	SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',

	//GET CURRENT USER PROCESS
	GET_CURRENT_USER_START: 'GET_CURRENT_USER_START',
	GET_CURRENT_USER_SUCCESS: 'GET_CURRENT_USER_SUCCESS',
	GET_CURRENT_USER_FAILURE: 'GET_CURRENT_USER_FAILURE',

	//LOGOUT PROCESS
	SIGN_OUT_START: 'SIGN_OUT_START',
	SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
	SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE',

	//SIGNUP PROCESS
	SIGN_UP_START: 'SIGN_UP_START',
	SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
	SIGN_UP_FAILURE: 'SIGN_UP_FAILURE',

	//USER EMAIL VERIFICATION
	EMAIL_VERIFICATION_START: 'EMAIL_VERIFICATION_START',
	EMAIL_VERIFICATION_SUCCESS: 'EMAIL_VERIFICATION_SUCCESS',
	EMAIL_VERIFICATION_FAILURE: 'EMAIL_VERIFICATION_FAILURE',

	//OTP RESEND PROCESS
	OTP_RESEND_START: 'VERIFICATION_CODE_RESEND_START',
	OTP_RESEND_SUCCESS: 'OTP_RESEND_SUCCESS',
	OTP_RESEND_FAILURE: 'VERIFICATION_CODE_RESEND_FAILURE',

	//PASSWORD RECOVERY
	PASSWORD_RECOVERY_START: 'PASSWORD_RECOVERY_START',
	PASSWORD_RECOVERY_SUCCESS: 'PASSWORD_RECOVERY_SUCCESS',
	PASSWORD_RECOVERY_FAILURE: 'PASSWORD_RECOVERY_FAILURE',

	//RECOVERY VERIFICATION
	RECOVERY_VERIFICATION_START: 'RECOVERY_VERIFICATION_START',
	RECOVERY_VERIFICATION_SUCCESS: 'RECOVERY_VERIFICATION_SUCCESS',
	RECOVERY_VERIFICATION_FAILURE: 'RECOVERY_VERIFICATION_FAILURE',

	//PASSWORD RESET
	PASSWORD_RESET_START: 'PASSWORD_RESET_START',
	PASSWORD_RESET_SUCCESS: 'PASSWORD_RESET_SUCCESS',
	PASSWORD_RESET_FALIUR: 'PASSWORD_RESET_FALIUR',

	//CLEAR RESPONSE
	CLEAR_RESPONSE: 'CLEAR_RESPONSE'
};

export default UserActionTypes;
