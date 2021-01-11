import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectResponse = createSelector([selectUser], user => user);

export const selectRecovery = createSelector(
	[selectUser],
	user => user.recovery
);

export const selectCurrentUser = createSelector(
	[selectUser],
	user => user.currentUser
);

export const selectVerified = createSelector(
	[selectCurrentUser],
	currentUser => currentUser.verified
);
