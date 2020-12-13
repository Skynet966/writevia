import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { getRequest, postRequest } from '../../utils/utils.functions';

import {
	signInSuccess,
	signInFailure,
	signOutFailure,
	signOutSuccess,
	signUpSuccess,
	signUPFailure
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
		const { status, data } = yield call(getRequest, '/auth/logout');
		yield status === 200 ? put(signOutSuccess()) : put(signOutSuccess(data));
	} catch (error) {
		yield call(signOutFailure(error));
	}
}

export function* signUp({ payload }) {
	try {
		const { data, status } = yield call(postRequest, '/user/register', payload);
		yield status === 201 ? put(signUpSuccess(data)) : put(signUPFailure(data));
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

export function* userSagas() {
	yield all([
		call(onlocalSignInStart),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onGetCurrentUser)
	]);
}
