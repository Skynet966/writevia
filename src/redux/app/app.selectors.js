import { createSelector } from 'reselect';

const selectApp = state => state.app;

export const selectShowSearchbar = createSelector(
	[selectApp],
	app => app.showSearchbar
);
