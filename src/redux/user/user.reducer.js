import UserActionTypes from './user.types';

const INITIAL_STATE = {
	currentUser: null,
	error: null,
	message: null,
	redirect: false
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
		case UserActionTypes.SIGN_UP_SUCCESS:
		case UserActionTypes.USER_VERIFICATION_SUCCESS:
		case UserActionTypes.PASSWORD_RECOVERY_VERIFICATION_SUCCESS:
		case UserActionTypes.PASSWORD_RESET_SUCCESS:
			return {
				...state,
				currentUser: payload,
				error: null,
				message: null,
				redirect: null
			};
		case UserActionTypes.PASSWORD_RECOVERY_SUCCESS:
			return {
				...state,
				currentUser: null,
				error: null,
				message: payload,
				redirect: true
			};
		case UserActionTypes.SIGN_OUT_SUCCESS:
			return { ...state, currentUser: null, error: null };
		case UserActionTypes.SIGN_IN_FAILURE:
		case UserActionTypes.SIGN_OUT_FAILURE:
		case UserActionTypes.SIGN_UP_FAILURE:
		case UserActionTypes.PASSWORD_RECOVERY_FAILURE:
		case UserActionTypes.PASSWORD_RECOVERY_VERIFICATION_FAILURE:
		case UserActionTypes.PASSWORD_RESET_FALIUR:
			return { ...state, error: payload, user: null };
		case UserActionTypes.USER_VERIFICATION_FAILURE:
		case UserActionTypes.VERIFICATION_CODE_RESEND_FAILURE:
			return { ...state, error: payload };
		default:
			return state;
	}
};

export default userReducer;
