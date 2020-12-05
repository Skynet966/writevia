import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TagsWidgetContainer = styled.div``;
export const TagsList = styled.ul`
	display: flex;
	flex-flow: wrap;
`;
export const TagContainer = styled.li`
	margin: 4px 3px;
	background-color: ${({ theme }) => theme.FooterTextBg};
	border-radius: 2px;
	box-shadow: 0 0 2px #1b1c1e;
	&:hover {
		background: ${({ theme }) => theme.ActiveLink};
	}
`;
export const Tag = styled(Link)`
	display: block;
	text-transform: uppercase;
	padding: 10px 15px;
	font-size: 12px;
	font-weight: 700;
	color: lightgray;
	transition: color 0.3s linear;
	${TagContainer},&:hover,:focus {
		color: white;
	}
`;
