import UserActionTypes from './user.types';

const INITIAL_STATE = {
	currentUser: null,
	error: null
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
		case UserActionTypes.SIGN_UP_SUCCESS:
		case UserActionTypes.USER_VERIFICATION_SUCCESS:
			return { ...state, currentUser: payload, error: null };
		case UserActionTypes.SIGN_OUT_SUCCESS:
			return { ...state, currentUser: null, error: null };
		case UserActionTypes.SIGN_IN_FAILURE:
		case UserActionTypes.SIGN_OUT_FAILURE:
		case UserActionTypes.SIGN_UP_FAILURE:
		case UserActionTypes.USER_VERIFICATION_FAILURE:
		case UserActionTypes.VERIFICATION_CODE_RESEND_FAILURE:
			return { ...state, error: payload };
		default:
			return state;
	}
};

export default userReducer;
