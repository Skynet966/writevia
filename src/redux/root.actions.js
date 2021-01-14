import RootActionsTypes from './root.types';

//RESPONSE HANDLING
export const successHandling = success => ({
	type: RootActionsTypes.SUCCESS_HANDLING,
	payload: success
});
export const errorHandling = error => ({
	type: RootActionsTypes.ERROR_HANDLING,
	payload: error
});
export const infoHandling = info => ({
	type: RootActionsTypes.INFO_HANDLING,
	payload: info
});
export const warningHandling = warning => ({
	type: RootActionsTypes.WARNING_HANDLING,
	payload: warning
});
