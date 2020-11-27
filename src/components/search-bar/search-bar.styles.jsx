import styled from 'styled-components';

import { colors, size } from '../../assets/base-config/base-config.styles';

export const SearchBarContainer = styled.div`
	position: absolute;
	width: 100%;
	z-index: -1;
	background: ${colors.White};
	display: flex;
	place-content: center;
	transform: translateY(${props => (props.show ? 0 : -110)}%);
	box-shadow: 0 6px 4px -5px rgba(0, 0, 0, 0.7);
	border-radius: 0px 0px 20px 20px;
	transition: transform 0.8s linear;
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
	caret-color: ${colors.Grey2};
	padding: 5px;
	border-radius: 20px 20px;
	box-shadow: inset 0 0 20px ${colors.Grey1};
	&::placeholder {
		font-weight: 700;
		color: ${colors.Grey2};
	}
	@media (max-width: ${size.sm}) {
		width: 90vw;
	}
`;
