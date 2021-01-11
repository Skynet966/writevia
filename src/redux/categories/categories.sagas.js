import { takeLatest, put, all, call } from 'redux-saga/effects';

import CategoriesActionTypes from './categories.types';
import CategoriesEndPoints from './categories.endpoints';

import {
	categoriesErrorHandling,
	categoriesFetchFailure,
	categoriesFetchSuccess
} from './categories.action';
import { getRequest } from '../../utils/utils.functions';

//BACKEND DATA FETCHING
function* startCategoriesFetching() {
	try {
		const { data, status } = yield call(
			getRequest,
			CategoriesEndPoints.GET_CATEGORIES
		);
		yield status === 202
			? put(categoriesFetchFailure(data))
			: put(categoriesFetchSuccess(data));
	} catch (error) {
		yield put(categoriesErrorHandling(error));
	}
}
//INITILIZERS
export function* onCategoriesStartFetching() {
	yield takeLatest(
		CategoriesActionTypes.CATEGORIES_FETCH_START,
		startCategoriesFetching
	);
}

//SAGAS INIT
export default function* categoriesSagas() {
	yield all([call(onCategoriesStartFetching)]);
}
