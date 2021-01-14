import { createSelector } from 'reselect';

const selectPost = state => state.post;

export const selectCreatingPost = createSelector(
	[selectPost],
	post => post.creatingPost
);
