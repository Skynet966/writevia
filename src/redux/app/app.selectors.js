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

export const selectThemeMode = createSelector(
	[selectTheme],
	theme => theme.light
);

export const selectSideNav = createSelector([selectApp], app => app.sideNav);

export const selectMenu = createSelector([selectApp], app => app.menu);
