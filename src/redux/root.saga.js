import { all, call } from 'redux-saga/effects';
import categoriesSagas from './categories/categories.sagas';
import userSagas from './user/user.sagas';

export default function* rootSaga() {
	yield all([call(userSagas), call(categoriesSagas)]);
}
