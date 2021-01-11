import CategoriesActionTypes from './categories.types';

const INITIAL_STATE = {
	list: [],
	info: null,
	error: null,
	message: null
};

const CategoriesReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case CategoriesActionTypes.CATEGORIES_FETCH_SUCCESS:
			return { ...state, list: payload.categories };
		case CategoriesActionTypes.CATEGORIES_FETCH_FAILURE:
			return {
				...state,
				info: payload.message
			};
		case CategoriesActionTypes.CATEGORIES_CATCH_ERROR:
			return { ...state, error: payload.error };
		default:
			return { ...state };
	}
};

export default CategoriesReducer;
