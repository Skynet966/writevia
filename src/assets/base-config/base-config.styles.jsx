import { keyframes } from 'styled-components';

//Colors Scheme
export const colors = {
	//Basic colors
	Body: '#505050',
	Headers: '#11151c',
	Primary: '#ee4266',
	Secondary: '#353535',
	Dark: '#1b1c1e',
	Grey1: '#e8eaed',
	Grey2: '#97989b',
	Grey3: '#323335',
	White: '#ffffff',
	Black: '#000000',

	//message colors
	Success: '#28a745',
	Error: '#dc3545',
	Info: '#ffc107',

	//Social Colors
	fb: '#225b99',
	tw: '#00adf2',
	pr: '#cc2127',
	in:
		'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
	li: '#2867B2',
	wa: '#25d366',
	yt: '#ff0000'
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
