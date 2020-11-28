import AppActionTypes from './app.types';

const INITIAL_STATE = {
	showSearchbar: false,
	searchText: null
};

const appReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case AppActionTypes.SHOW_SEARCH_BAR:
			return { ...state, showSearchbar: true };
		case AppActionTypes.HIDE_SEARCH_BAR:
			return { ...state, searchText: null, showSearchbar: false };
		case AppActionTypes.SET_SEARCH_TEXT:
			return { ...state, searchText: payload };
		default:
			return state;
	}
};

export default appReducer;
