import PostActionsTypes from './post.types';

//POST RESPONSE HANDLING
export const postSuccessHandling = success => ({
	type: PostActionsTypes.POST_SUCCESS_HANDLING,
	payload: success
});
export const postErrorHandling = error => ({
	type: PostActionsTypes.POST_ERROR_HANDLING,
	payload: error
});
export const postInfoHandling = info => ({
	type: PostActionsTypes.POST_INFO_HANDLING,
	payload: info
});
export const postWarningHandling = warning => ({
	type: PostActionsTypes.POST_WARNING_HANDLING,
	payload: warning
});

//POST CREATION
export const postCreationStart = metadata => ({
	type: PostActionsTypes.POST_CREATION_START,
	payload: metadata
});
export const postCreationSuccess = success => ({
	type: PostActionsTypes.POST_CREATION_SUCCESS,
	payload: success
});

//POST CONTENT UPDATION (SAVING CONTENT)
export const postContentUpdation = content => ({
	type: PostActionsTypes.SAVE_POST_CONTENT_START,
	payload: content
});
export const postUpdationSuccess = success => ({
	type: PostActionsTypes.SAVE_POST_CONTENT_SUCCESS,
	payload: success
});

//GENTRIC ACTION TEMPLATE
export const n = v => ({
	type,
	payload
});
