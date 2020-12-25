import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { getRequest, postRequest } from '../../utils/utils.functions';

import {
	signInSuccess,
	signInFailure,
	signOutFailure,
	signOutSuccess,
	signUpSuccess,
	signUPFailure,
	verificationSuccess,
	verificationFailure,
	verificationCodeResendFailure,
	passwordRecoveryFailure,
	passwordRecoverySuccess,
	passwordRecoveryVerificationFailure,
	passwordRecoveryVerificationSuccess,
	passwordResetFailure,
	passwordResetSuccess
} from './user.actions';

export function* signInWithCredentials({ payload: { username, password } }) {
	try {
		const {
			data: { user },
			status
		} = yield call(postRequest, '/auth/local/login', {
			username,
			password
		});

		yield status === 202
			? put(signInSuccess(user))
			: put(signInFailure({ message: 'user not found' }));
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signOutUser() {
	try {
		const { status, data } = yield call(getRequest, '/user/logout');
		yield status === 200 ? put(signOutSuccess()) : put(signOutSuccess(data));
	} catch (error) {
		yield call(signOutFailure(error));
	}
}

export function* signUp({ payload }) {
	try {
		const {
			data: { user, message },
			status
		} = yield call(postRequest, '/user/register', payload);
		yield status === 201
			? put(signUpSuccess(user))
			: put(signUPFailure(message));
	} catch (error) {
		yield put(signUPFailure(error));
	}
}

export function* getUser() {
	try {
		const {
			data: { user },
			status
		} = yield call(getRequest, '/user/get');
		yield status === 202
			? put(signInSuccess(user))
			: console.log('--do login for more feature--');
	} catch (error) {
		console.error(error);
	}
}

export function* userEmailVerification({ payload }) {
	try {
		console.log(payload);
		const {
			data: { user, message },
			status
		} = yield call(postRequest, '/user/verification', { otp: payload });
		yield status === 202
			? put(verificationSuccess(user))
			: put(verificationFailure(message));
	} catch (error) {
		yield put(verificationFailure(error));
	}
}

export function* userEmailVerificationCodeResend() {
	try {
		const {
			data: { message },
			status
		} = yield call(getRequest, '/user/verification/resend');
		yield status === 205
			? console.log(message)
			: put(verificationCodeResendFailure(message));
	} catch (error) {
		yield put(verificationCodeResendFailure(error));
	}
}

export function* userAccountPasswordRecovery({ payload }) {
	try {
		console.log(payload);
		const {
			data: { message },
			status
		} = yield call(postRequest, '/user/passwordRecovery', { email: payload });
		yield status === 205
			? put(passwordRecoverySuccess(message))
			: put(passwordRecoveryFailure(message));
	} catch (error) {
		yield put(passwordRecoveryFailure(error));
	}
}

export function* userAccountPasswordRecoveryVerification({ payload }) {
	try {
		const {
			data: { user, message },
			status
		} = yield call(postRequest, '/user/passwordRecoveryVerification', {
			otp: payload
		});
		yield status === 202
			? put(passwordRecoveryVerificationSuccess(user))
			: put(passwordRecoveryVerificationFailure(message));
	} catch (error) {
		yield put(passwordRecoveryVerificationFailure(error));
	}
}

export function* userPasswordReset({ payload }) {
	try {
		const {
			data: { user, message },
			status
		} = yield call(postRequest, '/user/passwordReset', { password: payload });
		yield status === 201
			? put(passwordResetSuccess(user))
			: put(passwordResetFailure(message));
	} catch (error) {
		yield put(passwordResetFailure(error));
	}
}

export function* onlocalSignInStart() {
	yield takeLatest(UserActionTypes.LOCAL_SIGN_IN_START, signInWithCredentials);
}

export function* onSignOutStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutUser);
}

export function* onSignUpStart() {
	yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onGetCurrentUser() {
	yield takeLatest(UserActionTypes.GET_CURRENT_USER, getUser);
}

export function* onVerificationStart() {
	yield takeLatest(
		UserActionTypes.USER_VERIFICATION_START,
		userEmailVerification
	);
}

export function* onVerificationCodeResend() {
	yield takeLatest(
		UserActionTypes.VERIFICATION_CODE_RESEND_START,
		userEmailVerificationCodeResend
	);
}

export function* onPasswordRecoveryStart() {
	yield takeLatest(
		UserActionTypes.PASSWORD_RECOVERY_START,
		userAccountPasswordRecovery
	);
}

export function* onPasswordRecoveryVerificationStart() {
	yield takeLatest(
		UserActionTypes.PASSWORD_RECOVERY_VERIFICATION_START,
		userAccountPasswordRecoveryVerification
	);
}

export function* onPasswordResetStart() {
	yield takeLatest(UserActionTypes.PASSWORD_RESET_START, userPasswordReset);
}

export function* userSagas() {
	yield all([
		call(onlocalSignInStart),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onGetCurrentUser),
		call(onVerificationStart),
		call(onVerificationCodeResend),
		call(onPasswordRecoveryStart),
		call(onPasswordRecoveryVerificationStart),
		call(onPasswordResetStart)
	]);
}
