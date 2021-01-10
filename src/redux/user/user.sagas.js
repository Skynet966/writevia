import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import UserEndPoints from './user.endpoints';

import { getRequest, postRequest } from '../../utils/utils.functions';

import {
	errorHandling,
	signInSuccess,
	signInFailure,
	signOutFailure,
	signOutSuccess,
	signUpSuccess,
	signUPFailure,
	verificationSuccess,
	verificationFailure,
	passwordRecoveryFailure,
	passwordRecoverySuccess,
	passwordRecoveryVerificationFailure,
	passwordRecoveryVerificationSuccess,
	passwordResetFailure,
	passwordResetSuccess,
	getCurrentUserSuccess,
	getCurrentUserFailure,
	otpResendSuccess,
	otpResendFailure
} from './user.actions';

export function* signInWithCredentials({ payload: { username, password } }) {
	try {
		const { data, status } = yield call(
			postRequest,
			UserEndPoints.LOGIN.LOCAL,
			{
				username,
				password
			}
		);
		yield status === 202 ? put(signInSuccess(data)) : put(signInFailure(data));
	} catch (error) {
		yield put(errorHandling(error));
	}
}

export function* getUser() {
	try {
		const { data, status } = yield call(getRequest, UserEndPoints.GET_USER);
		yield status === 202
			? put(getCurrentUserSuccess(data))
			: put(getCurrentUserFailure(data));
	} catch (error) {
		put(errorHandling(error));
	}
}

export function* signOutUser() {
	try {
		const { data, status } = yield call(getRequest, UserEndPoints.LOGOUT);
		yield status === 202
			? put(signOutSuccess(data))
			: put(signOutFailure(data));
	} catch (error) {
		yield call(errorHandling(error));
	}
}

export function* signUp({ payload }) {
	try {
		const { data, status } = yield call(
			postRequest,
			UserEndPoints.SIGN_UP,
			payload
		);
		yield status === 201 ? put(signUpSuccess(data)) : put(signUPFailure(data));
	} catch (error) {
		yield put(errorHandling(error));
	}
}

export function* userEmailVerification({ payload }) {
	try {
		const { data, status } = yield call(
			postRequest,
			UserEndPoints.EMAIL_VERIFICATION,
			{ otp: payload }
		);
		yield status === 202
			? put(verificationSuccess(data))
			: put(verificationFailure(data));
	} catch (error) {
		yield put(errorHandling(error));
	}
}

export function* userEmailVerificationCodeResend() {
	try {
		const { data, status } = yield call(getRequest, UserEndPoints.RESEND_OTP);
		yield status === 201
			? put(otpResendSuccess(data))
			: put(otpResendFailure(data));
	} catch (error) {
		yield put(errorHandling(error));
	}
}

export function* userAccountPasswordRecovery({ payload }) {
	try {
		const { data, status } = yield call(
			postRequest,
			UserEndPoints.PASSWORD_RECOVERY,
			{ email: payload }
		);
		yield status === 201
			? put(passwordRecoverySuccess(data))
			: put(passwordRecoveryFailure(data));
	} catch (error) {
		yield put(errorHandling(error));
	}
}

export function* userAccountPasswordRecoveryVerification({ payload }) {
	try {
		const { data, status } = yield call(
			postRequest,
			UserEndPoints.RECOVERY_VERIFICATION,
			{
				otp: payload
			}
		);
		yield status === 202
			? put(passwordRecoveryVerificationSuccess(data))
			: put(passwordRecoveryVerificationFailure(data));
	} catch (error) {
		yield put(errorHandling(error));
	}
}

export function* userPasswordReset({ payload }) {
	try {
		const { data, status } = yield call(
			postRequest,
			UserEndPoints.PASSWORD_RESET,
			{ password: payload }
		);
		yield status === 201
			? put(passwordResetSuccess(data))
			: put(passwordResetFailure(data));
	} catch (error) {
		yield put(errorHandling(error));
	}
}

export function* onlocalSignInStart() {
	yield takeLatest(UserActionTypes.LOCAL_SIGN_IN_START, signInWithCredentials);
}

export function* onGetCurrentUser() {
	yield takeLatest(UserActionTypes.GET_CURRENT_USER_START, getUser);
}

export function* onSignOutStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutUser);
}

export function* onSignUpStart() {
	yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onVerificationStart() {
	yield takeLatest(
		UserActionTypes.EMAIL_VERIFICATION_START,
		userEmailVerification
	);
}

export function* onVerificationCodeResend() {
	yield takeLatest(
		UserActionTypes.OTP_RESEND_START,
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
		UserActionTypes.RECOVERY_VERIFICATION_START,
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
