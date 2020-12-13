import Axios from 'axios';

//createUID is a function use to generate random id's
export const generateUUID = () => {
	let date = new Date().getTime();
	let uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		let r = (date + Math.random() * 16) % 16 | 0;
		date = Math.floor(date / 16);
		return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
	});
	return uid;
};

//Post Request Handler function
export const postRequest = (url, dataObj) =>
	Axios.post(url, dataObj, { withCredentials: true })
		.then(response => response)
		.catch(error => error);

export const getRequest = url =>
	Axios.get(url, { withCredentials: true })
		.then(response => response)
		.catch(error => error);
