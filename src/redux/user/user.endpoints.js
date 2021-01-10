const UserEndPoints = {
	LOGIN: {
		FACEBOOK: '',
		TWITTER: '',
		GOOGLE: '',
		LOCAL: '/auth/local/login'
	},
	SIGN_UP: '/user/register',
	GET_USER: '/auth/getUser',
	LOGOUT: '/auth/logout',
	EMAIL_VERIFICATION: '/user/verification',
	RESEND_OTP: '/user/resendOTP',
	PASSWORD_RECOVERY: '/user/passwordRecovery',
	RECOVERY_VERIFICATION: '/user/passwordRecoveryVerification',
	PASSWORD_RESET: '/user/passwordReset'
};

export default UserEndPoints;
