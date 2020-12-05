import styled from 'styled-components';
import { screenSize } from '../../App.styles';

export const SearchBarContainer = styled.div`
	position: absolute;
	width: 100%;
	z-index: -1;
	background: ${({ theme }) => theme.Header};
	display: flex;
	place-content: center;
	transform: translateY(${({ show }) => (show ? 0 : -110)}%);
	box-shadow: 0 6px 4px -5px rgba(0, 0, 0, 0.7);
	border-radius: 0px 0px 20px 20px;
	transition: transform 0.8s ease-in-out;
`;
export const Search = styled.div`
	padding: 15px;
`;

export const InputBox = styled.input`
	font-size: 1em;
	font-style: italic;
	text-align: center;
	border: none;
	outline: none;
	width: 50vw;
	background: ${({ theme }) => theme.Body};
	caret-color: ${({ theme }) => theme.HeaderText};
	color: ${({ theme }) => theme.HeaderText};
	padding: 5px;
	border-radius: 20px;
	box-shadow: inset 0 0 4px ${({ theme }) => theme.Shadow};
	&::placeholder {
		font-weight: 700;
		color: ${({ theme }) => theme.HeaderText};
	}
	@media (max-width: ${screenSize.sm}) {
		width: 90vw;
	}
`;
