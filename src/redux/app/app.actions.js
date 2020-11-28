import AppActionTypes from './app.types';

export const showSearchbar = () => ({
	type: AppActionTypes.SHOW_SEARCH_BAR
});
export const hideSearchbar = () => ({
	type: AppActionTypes.HIDE_SEARCH_BAR
});
export const setSearchText = text => ({
	type: AppActionTypes.SET_SEARCH_TEXT,
	payload: text
});
