import styled from 'styled-components';

export const FormInputContainer = styled.div`
	margin: 0 0 20px;
`;
export const Input = styled.input.attrs(({ placeholder, ...otherProps }) => ({
	placeholder: placeholder ? 'Enter ' + placeholder : '',
	...otherProps
}))`
	font-family: 'Montserrat', sans-serif;
	font-size: 1em;
	font-weight: 400;
	color: ${({ theme }) => theme.BodyText};
	width: -webkit-fill-available;
	height: ${props => (props.type === 'textarea' ? '100px;' : '50px')};
	padding: 10px 15px;
	background-color: ${({ theme }) => theme.Body};
	border-radius: 5px;
	border: 2px solid #e8eaed;
	outline: none;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	&::placeholder {
		color: ${({ theme }) => theme.MutedText};
	}
	&:focus {
		box-shadow: ${({ type }) =>
			type === 'range'
				? ''
				: '0px 0px 5px 1px ${({ theme }) => theme.ActiveLink}'};
	}
`;

export const Label = styled.label``;
