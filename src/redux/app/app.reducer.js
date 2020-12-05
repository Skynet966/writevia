import AppActionTypes from './app.types';

import { lightTheme, darkTheme } from '../../App.styles';

const INITIAL_STATE = {
	showSearchbar: false,
	searchText: null,
	theme: lightTheme,
	menu: false
};

const appReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case AppActionTypes.SHOW_SEARCH_BAR:
			return { ...state, showSearchbar: true };
		case AppActionTypes.HIDE_SEARCH_BAR:
			return { ...state, searchText: null, showSearchbar: false };
		case AppActionTypes.SET_SEARCH_TEXT:
			return { ...state, searchText: payload };
		case AppActionTypes.TOGGLE_THEME:
			if (state.theme.light) return { ...state, theme: darkTheme };
			return { ...state, theme: lightTheme };
		case AppActionTypes.TOGGLE_MENU:
			return { ...state, menu: !state.menu };
		default:
			return state;
	}
};

export default appReducer;
