import { takeLatest, put, all, call } from 'redux-saga/effects';

import { postRequest } from '../../utils/utils.functions';
import {
	postCreationSuccess,
	postErrorHandling,
	postInfoHandling
} from './post.actions';
import PostEndPoints from './post.endpoints';
import PostActionsTypes from './post.types';

//BACKEND DATA FETCHING
function* startPostCreation({ payload }) {
	try {
		const { data, status } = yield call(
			postRequest,
			PostEndPoints.CREATE_POST,
			payload
		);
		yield status === 201
			? put(postCreationSuccess(data))
			: put(postInfoHandling(data));
	} catch (error) {
		yield put(postErrorHandling);
	}
}
//INITILIZERS
function* onPostStartCreating() {
	yield takeLatest(PostActionsTypes.POST_CREATION_START, startPostCreation);
}

//SAGAS INIT
export default function* postSagas() {
	yield all([call(onPostStartCreating)]);
}
