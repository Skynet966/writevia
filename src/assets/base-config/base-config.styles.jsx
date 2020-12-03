import { keyframes } from 'styled-components';

//Colors Scheme
export const light_theme = {
	//Basic colors
	Body: '#505050',
	Headers: '#ffffff',
	Primary: '#ee4266',
	Secondary: '#353535',
	Loader: 'darkgrey',
	Dark: '#1b1c1e',
	Grey1: '#e8eaed',
	Grey2: '#97989b',
	Grey3: '#323335',
	White: '#ffffff',
	Black: '#000000',
	Muted: '#6c757d',
	Link: '#11151c',
	light: true
};

export const dark_theme = {
	//Basic colors
	Body: '#505050',
	Headers: '#1e1e30',
	Primary: '#ee4266',
	Secondary: '#353535',
	Loader: 'lightsteelblue',
	Dark: '#1e1e30',
	Grey1: '#25253d',
	Grey2: '#97989b',
	Grey3: '#323335',
	White: '#161625',
	Black: '#ffffff',
	Muted: '#6c757d',
	Link: '#fffff6',
	light: false
};

export const social = {
	//message colors
	Success: '#28a745',
	Error: '#dc3545',
	Info: '#ffc107',

	//Social Colors
	facebook: '#225b99',
	twitter: '#00adf2',
	pinterest: '#cc2127',
	instagram:
		'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
	linkedin: '#2867B2',
	whatsapp: '#25d366',
	youtube: '#ff0000',
	github: '#24292e'
};
//screen width
export const size = {
	xl: '1200px',
	lg: '992px',
	md: '768px',
	sm: '576px',
	xs: '576px'
};

//animations
export const fadeIn = keyframes`
from {opacity: 0} to {opacity: 1}
`;
