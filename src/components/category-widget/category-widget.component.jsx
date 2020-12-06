import React from 'react';
import { withRouter } from 'react-router-dom';

import {
	CategoryList,
	CategoryWidgetContainer,
	ItemLink,
	ListItem
} from './category-widget.styles';

const CategoryWidget = ({ match }) => (
	<CategoryWidgetContainer>
		<CategoryList>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem>
				<ItemLink activeClassName='active__link' to='/blogs/technology'>
					Technology
				</ItemLink>
			</ListItem>
		</CategoryList>
	</CategoryWidgetContainer>
);

export default withRouter(CategoryWidget);
