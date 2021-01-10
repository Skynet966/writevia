import UserActionTypes from './user.types';

const INITIAL_STATE = {
	currentUser: null,
	error: null,
	message: null,
	info: null,
	recovery: { status: false, reset: false }
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
		case UserActionTypes.GET_CURRENT_USER_SUCCESS:
		case UserActionTypes.SIGN_UP_SUCCESS:
		case UserActionTypes.EMAIL_VERIFICATION_SUCCESS:
		case UserActionTypes.PASSWORD_RESET_SUCCESS:
			return {
				...state,
				error: null,
				info: null,
				currentUser: payload.user,
				message: payload.message,
				recovery: { status: false }
			};
		case UserActionTypes.RECOVERY_VERIFICATION_SUCCESS:
		case UserActionTypes.PASSWORD_RECOVERY_SUCCESS:
			return {
				...state,
				error: null,
				info: null,
				currentUser: null,
				recovery: payload.recovery,
				message: payload.message
			};
		case UserActionTypes.SIGN_OUT_SUCCESS:
			return {
				...state,
				error: null,
				info: null,
				currentUser: null,
				message: payload.message
			};
		case UserActionTypes.OTP_RESEND_SUCCESS:
			return {
				...state,
				error: null,
				info: null,
				message: payload.message
			};
		case UserActionTypes.SIGN_IN_FAILURE:
		case UserActionTypes.GET_CURRENT_USER_FAILURE:
		case UserActionTypes.SIGN_OUT_FAILURE:
		case UserActionTypes.SIGN_UP_FAILURE:
		case UserActionTypes.OTP_RESEND_FAILURE:
		case UserActionTypes.EMAIL_VERIFICATION_FAILURE:
		case UserActionTypes.PASSWORD_RECOVERY_FAILURE:
		case UserActionTypes.RECOVERY_VERIFICATION_FAILURE:
		case UserActionTypes.PASSWORD_RESET_FALIUR:
			return {
				...state,
				user: null,
				message: null,
				error: null,
				info: payload.message
			};
		case UserActionTypes.ERROR_HANDLING:
			return { ...state, message: null, info: null, error: payload };
		default:
			return state;
	}
};

export default userReducer;
