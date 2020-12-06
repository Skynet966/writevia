import React from 'react';
import { withRouter } from 'react-router-dom';

import {
	CategoryList,
	CategoryWidgetContainer,
	ItemLink,
	ListItem
} from './category-widget.styles';

const CategoryWidget = ({ match, invert = 'false' }) => (
	<CategoryWidgetContainer>
		<CategoryList>
			<ListItem invert={invert}>
				<ItemLink
					invert={invert}
					activeClassName='active__link'
					to='/blogs/technology'
				>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem invert={invert}>
				<ItemLink
					invert={invert}
					activeClassName='active__link'
					to='/blogs/technology'
				>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem invert={invert}>
				<ItemLink
					invert={invert}
					activeClassName='active__link'
					to='/blogs/technology'
				>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem invert={invert}>
				<ItemLink
					invert={invert}
					activeClassName='active__link'
					to='/blogs/technology'
				>
					Technology
				</ItemLink>
			</ListItem>
			<ListItem invert={invert}>
				<ItemLink
					invert={invert}
					activeClassName='active__link'
					to='/blogs/technology'
				>
					Technology
				</ItemLink>
			</ListItem>
		</CategoryList>
	</CategoryWidgetContainer>
);

export default withRouter(CategoryWidget);
