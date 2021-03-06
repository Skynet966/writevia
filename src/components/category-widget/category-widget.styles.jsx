import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const CategoryWidgetContainer = styled.div`
	box-shadow: inset 0 0 6px #000;
	border-radius: 1em;
	margin-bottom: 20px;
	padding: 0 5px;
	width: -webkit-fill-available;
`;
export const CategoryList = styled.ul`
	display: flex;
	flex-flow: column;
	margin: 0;
	max-height: 800px;
	overflow-y: auto;
	::-webkit-scrollbar-track {
		margin: 15px 0;
	}
	::-webkit-scrollbar {
		width: 6px;
	}
	::-webkit-scrollbar-thumb {
		background: #c4c4c4;
	}
`;
export const ListItem = styled.li`
	padding: 15px;
	text-align: center;
	border-bottom: 1px solid ${({ theme }) => theme.LineFX};
	&:last-child {
		border-bottom: none;
	}
`;
export const ItemLink = styled(NavLink)`
	font-weight: 800;
	text-transform: uppercase;
	color: ${({ theme }) => theme.BodyText};
`;
