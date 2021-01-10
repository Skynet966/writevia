import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
	[selectUser],
	user => user.currentUser
);

export const selectVerified = createSelector(
	[selectCurrentUser],
	user => user.verified
);

export const selectRecovery = createSelector(
	[selectUser],
	user => user.recovery
);
