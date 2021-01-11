import CategoriesActionTypes from './categories.types';

//CATEGORIES FETCHING
export const categoriesFetching = () => ({
	type: CategoriesActionTypes.CATEGORIES_FETCH_START
});

export const categoriesFetchSuccess = data => ({
	type: CategoriesActionTypes.CATEGORIES_FETCH_SUCCESS,
	payload: data
});

export const categoriesFetchFailure = data => ({
	type: CategoriesActionTypes.CATEGORIES_FETCH_FAILURE,
	payload: data
});

//ERROR HANDLING
export const categoriesErrorHandling = error => ({
	type: CategoriesActionTypes.CATEGORIES_CATCH_ERROR,
	payload: error
});
