import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const CategoryWidgetContainer = styled.div`
	box-shadow: inset 0 0 6px #000;
	border-radius: 1em;
	margin-bottom: 20px;
	padding: 0 5px;
`;
export const CategoryList = styled.ul`
	display: flex;
	flex-flow: column;
	margin: 0;
	max-height: 800px;
	overflow-y: auto;
`;
export const ListItem = styled.li`
	padding: 15px;
	border-bottom: 1px solid ${props => props.theme.Grey1};
	&:last-child {
		border-bottom: none;
	}
`;
export const ItemLink = styled(NavLink)`
	font-weight: 800;
	text-transform: uppercase;
`;
