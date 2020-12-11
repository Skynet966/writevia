import React from 'react';

import styled from 'styled-components';
import { socialColor } from '../../App.styles';

export const ButtonContainer = styled.div``;
export const Button = styled.button`
	display: inline-block;
	padding: 10px 40px;
	border-radius: 2px;
	border: none;
	color: #fff;
	font-weight: 700;
	font-size: 14px;
	text-transform: uppercase;
	transition: all 0.3s;
	background-color: ${({ theme, media }) =>
		media ? socialColor[media] : theme.ActiveLink};
	box-shadow: inset 0 0 0 2px
		${({ theme, media }) => (media ? socialColor[media] : theme.ActiveLink)};
	&:hover,
	:focus {
		background: transparent;
		outline: none;
		color: ${({ theme }) => theme.BodyText};
	}
`;

const ButtonInput = ({ handleChange, handleClick, text, ...otherProps }) => (
	<ButtonContainer>
		<Button onClick={handleClick} onChange={handleChange} {...otherProps}>
			{text}
		</Button>
	</ButtonContainer>
);

export default ButtonInput;
