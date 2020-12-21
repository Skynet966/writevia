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
	verificationCodeResendFailure
} from './user.actions';

export function* signInWithCredentials({ payload: { username, password } }) {
	try {
		const { data } = yield call(postRequest, '/auth/local/login', {
			username,
			password
		});
		yield put(signInSuccess(data));
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
		const { data, status } = yield call(getRequest, '/user/get');
		console.log(data, status);
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

export function* userSagas() {
	yield all([
		call(onlocalSignInStart),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onGetCurrentUser),
		call(onVerificationStart),
		call(onVerificationCodeResend)
	]);
}
