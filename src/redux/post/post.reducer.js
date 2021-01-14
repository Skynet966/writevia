import PostActionsTypes from './post.types';

const INITIAL_STATE = {
	creatingPost: { id: null, metadata: null, content: null },
	success: null,
	error: null,
	info: null,
	warning: null,
	message: null
};

const postReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case PostActionsTypes.POST_SUCCESS_HANDLING:
			return { ...state, success: payload.success };
		case PostActionsTypes.POST_ERROR_HANDLING:
			return { ...state, error: payload.error };
		case PostActionsTypes.POST_INFO_HANDLING:
			return { ...state, info: payload.message };
		case PostActionsTypes.POST_WARNING_HANDLING:
			return { ...state, warning: payload.warning };
		case PostActionsTypes.POST_CREATION_SUCCESS:
			return {
				...state,
				creatingPost: { id: payload.post._id, metadata: payload.post },
				message: payload.message
			};
		case PostActionsTypes.SAVE_POST_CONTENT_SUCCESS:
			return {
				...state,
				creatingPost: { content: payload.content },
				message: payload.message
			};
		default:
			return state;
	}
};
export default postReducer;
