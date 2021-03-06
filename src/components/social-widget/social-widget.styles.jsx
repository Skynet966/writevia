import styled from 'styled-components';
import { socialColor } from '../../App.styles';

export const SocialWidgetContainer = styled.div``;
export const SocialContainer = styled.ul`
	display: flex;
	box-shadow: 0 0 3px #000;
	place-content: space-around;
	text-align: center;
	flex-flow: row;
	@media (min-width: 768px) and (max-width: 992px) {
		flex-flow: column; //768 991
	}
`;
export const SocialBlock = styled.li`
	padding: 30px 0;
	background: ${props => socialColor[props.media]};
	overflow: hidden;
	transition: opacity 0.4s linear;
	width: -webkit-fill-available;
	&:hover,
	:focus {
		opacity: 0.8;
	}
`;
export const Social = styled.a`
	font-family: 'Mulish', sans-serif;
	display: flex;
	flex-flow: column;
	gap: 15px;
	color: white;
	cursor: pointer;
	&::before {
		font-family: 'FontAwesome';
		font-size: 1.8em;
	}
	&::after {
		content: 'Followers';
	}
	${SocialBlock}:hover,:focus {
		color: white;
	}
	&:hover,
	:focus {
		color: white;
	}
`;
