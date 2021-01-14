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
export const toggleTheme = () => ({
	type: AppActionTypes.TOGGLE_THEME
});
export const toggleMenu = () => ({
	type: AppActionTypes.TOGGLE_MENU
});
export const toggleSideNav = () => ({
	type: AppActionTypes.TOGGLE_SIDE_NAV
});
