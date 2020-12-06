import React from 'react';

import Carousel from '../../components/carousel/carousel.component';
import DescriptionCard from '../../components/description-card/description-card.component';
import SocialWidget from '../../components/social-widget/social-widget.component';
import CategoryWidget from '../../components/category-widget/category-widget.component';

import styled from 'styled-components';

export const BlogsPageContainer = styled.div``;

const BlogsPage = () => (
	<BlogsPageContainer>
		<Carousel />
		<div className='container'>
			<div className='row'>
				<div className='col-md-8'></div>
				<div className='col-md-4'>
					<DescriptionCard title='Social media'>
						<SocialWidget />
					</DescriptionCard>
					<DescriptionCard title='Categories'>
						<CategoryWidget />
					</DescriptionCard>
				</div>
			</div>
		</div>
	</BlogsPageContainer>
);

export default BlogsPage;
