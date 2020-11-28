import { createSelector } from 'reselect';

const selectApp = state => state.app;

export const selectShowSearchbar = createSelector(
	[selectApp],
	app => app.showSearchbar
);

export const selectSearchText = createSelector(
	[selectApp],
	app => app.searchText
);

export const selectTheme = createSelector([selectApp], app => app.theme);
