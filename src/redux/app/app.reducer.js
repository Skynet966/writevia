import AppActionTypes from './app.types';

const INITIAL_STATE = {
	showSearchbar: false
};

const appReducer = (state = INITIAL_STATE, { type }) => {
	switch (type) {
		case AppActionTypes.SHOW_SEARCH_BAR:
			return { ...state, showSearchbar: true };
		case AppActionTypes.HIDE_SEARCH_BAR:
			return { ...state, showSearchbar: false };
		default:
			return state;
	}
};

export default appReducer;
