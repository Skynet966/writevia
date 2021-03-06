import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const AppContainer = styled.div`
	text-align: center;
`;

export const lightTheme = {
	Header: '#fafafa',
	HeaderText: '#11151c',
	Body: '#ffffff',
	BodyText: '#505050',
	Footer: '#1b1c1e',
	FooterText: '#d9d9d9',
	FooterTextBg: '#323335',
	FooterLineFX: '#323335',
	ActiveLink: '#ee4266',
	MutedText: '#6c757d',
	LineFX: '#e8eaed',
	Shadow: '#343a40',
	Selector: 'ghostwhite',
	light: true
};
export const darkTheme = {
	Header: '#1e1e30',
	HeaderText: '#fafafa',
	Body: '#161625',
	BodyText: '#fafafa',
	Footer: '#1e1e30',
	FooterText: '#d9d9d9',
	FooterTextBg: '#161625',
	FooterLineFX: '#4e4e66',
	ActiveLink: '#ee4266',
	MutedText: '#6c757d',
	LineFX: '#25253d',
	Shadow: '#6c757d',
	Selector: '#f8f8ff24',
	light: false
};
export const color = {
	blue: '#007bff',
	indigo: '#6610f2',
	purple: '#6f42c1',
	pink: '#e83e8c',
	red: '#dc3545',
	orange: '#fd7e14',
	yellow: '#ffc107',
	green: '#28a745',
	teal: '#20c997',
	cyan: '#17a2b8',
	white: '#fff',
	gray: '#6c757d',
	grayDark: '#343a40',
	primary: '#007bff',
	secondary: '#6c757d',
	success: '#28a745',
	info: '#17a2b8',
	warning: '#ffc107',
	danger: '#dc3545',
	light: '#f8f9fa',
	dark: '#343a40',
	megan: '#97989b'
};
export const socialColor = {
	facebook: '#225b99',
	twitter: '#00adf2',
	pinterest: '#cc2127',
	instagram:
		'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
	linkedin: '#2867B2',
	whatsapp: '#25d366',
	youtube: '#ff0000',
	github: '#24292e',
	google: '#1a73e8'
};
export const screenSize = {
	xl: '1200px',
	lg: '992px',
	md: '768px',
	sm: '576px',
	xs: '0px'
};

//animations
export const fadeIn = keyframes`
	from {opacity: 0} to {opacity: 1}
`;

const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior:smooth;
    }
    body{
        font-family: 'Mulish', sans-serif;
        background: ${({ theme }) => theme.Body};
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-weight: 400;
        overflow-x:hidden;
        transition: color 1s ease-in;
    }
    /* selection for text */
    ::selection{
        background-color:#e45f78;
        color: white;
    }
     //Scroll bar Global Style
    /* width */
    ::-webkit-scrollbar {
        width: 7px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background:${({ theme }) => theme.Body};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #97989b;
        border-radius: 1em;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #323335;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        margin: 0 0 15px;
        color: ${({ theme }) => theme.BodyText}
    }
    h1{
        font-size: 32px;
    }
    h2{
        font-size: 25px;
    }
    h3{
        font-size: 20px;
    }
    h4{
        font-size: 16px;
    }
    h5{
        font-size: 12px;
    }
    h6{
        font-size: 8px;
    }

    p{
        line-height: 22px;
        margin: 0 0 20px;
        color: ${({ theme }) => theme.BodyText}
    }

    a{
        color: ${({ theme }) => theme.HeaderText};
        text-decoration: none;
        outline:none;
        transition: color 0.3s ease-in;
        &:hover,:focus{
            color: ${({ theme }) => theme.ActiveLink};
        } 
    }
    //list styling
    ul,ol{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    //represent active state of the link
    .active__link {
	    color: ${({ theme }) => theme.ActiveLink};
	    font-weight: 700;
    }
    .sun{
        box-shadow: 0px 0px 20px 0px #ffe819;
        background: #ffff0057;
        color:#ffeb3b;
    }
    .moon{
        color:#918e80;
    }
    .avatar__image__loading{
        position: absolute;
        width: 100px;
        color: crimson;
    }
    .page__loading{
        color: ${color.red};
        width:fit-content;
    }
    .linefx__top{
        border-top: 1px solid ${({ theme }) => theme.FooterLineFX}
    }
`;

export const Form = styled.form``;

export default GlobalStyle;
