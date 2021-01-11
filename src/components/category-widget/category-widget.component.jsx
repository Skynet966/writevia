import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { categoriesFetching } from '../../redux/categories/categories.action';
import { selectCategoriesList } from '../../redux/categories/categories.selectors';
import { generateUUID } from '../../utils/utils.functions';

import {
	CategoryList,
	CategoryWidgetContainer,
	ItemLink,
	ListItem
} from './category-widget.styles';

const CategoryWidget = ({ categories, fetchCategories, match }) => {
	useEffect(() => {
		fetchCategories();
	}, [fetchCategories]);
	return categories.length > 0 ? (
		<CategoryWidgetContainer>
			<CategoryList>
				{categories.map(category => (
					<ListItem key={generateUUID()}>
						<ItemLink
							activeClassName='active__link'
							to={`/blogs/${category.title}`}
						>
							{category.title}
						</ItemLink>
					</ListItem>
				))}
			</CategoryList>
		</CategoryWidgetContainer>
	) : (
		''
	);
};

const mapStateToProps = createStructuredSelector({
	categories: selectCategoriesList
});

const mapDispatchToProps = dispatch => ({
	fetchCategories: () => dispatch(categoriesFetching())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(CategoryWidget));
