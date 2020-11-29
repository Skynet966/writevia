import styled from 'styled-components';

export const FormInputContainer = styled.div`
	margin: 0 0 20px;
`;
export const Input = styled.input.attrs(({ placeholder, ...otherProps }) => ({
	placeholder: 'Enter your ' + placeholder,
	...otherProps
}))`
	font-family: 'Montserrat', sans-serif;
	font-size: 1em;
	font-weight: 400;
	color: ${props => props.theme.Black};
	width: -webkit-fill-available;
	height: ${props => (props.type === 'textarea' ? '100px;' : '40px')};
	padding: 10px 15px;
	background-color: ${props => props.theme.White};
	border-radius: 5px;
	border: 2px solid #e8eaed;
	outline: none;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	&::placeholder {
		color: ${props => props.theme.Grey2};
	}
`;

export const Label = styled.label``;
