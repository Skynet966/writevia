import AppActionTypes from './app.types';

import {
	light_theme,
	dark_theme
} from '../../assets/base-config/base-config.styles';

const INITIAL_STATE = {
	showSearchbar: false,
	searchText: null,
	theme: light_theme
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
			if (state.theme.light) return { ...state, theme: dark_theme };
			return { ...state, theme: light_theme };
		default:
			return state;
	}
};

export default appReducer;
