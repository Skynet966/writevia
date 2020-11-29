import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const CategoryWidgetContainer = styled.div``;
export const CategoryList = styled.ul``;
export const ListItem = styled.li``;
export const ItemLink = styled(NavLink)``;

const CategoryWidget = () => (
	<CategoryWidgetContainer>
		<CategoryList>
			<ListItem>
				<ItemLink activeClassName={active__link} to='/blogs/' />
			</ListItem>
		</CategoryList>
	</CategoryWidgetContainer>
);

export default CategoryWidget;
