import React from 'react';

import styled from 'styled-components';

import DescriptionCard from '../../components/description-card/description-card.component';
import SocialWidget from '../../components/social-widget/social-widget.component';
import CategoryWidget from '../../components/category-widget/category-widget.component';

import PostPreviewCard from '../../components/post-preview-card/post-preview-card.component';

export const HomePageContainer = styled.div``;

const HomePage = () => (
	<HomePageContainer>
		<div className='container'>
			<div className='row'>
				<div className='col-md-8 order-first'>
					<DescriptionCard title='Recent Posts'>
						<div className='row'>
							<div className='col-md-6'>
								<PostPreviewCard />
							</div>
							<div className='col-md-6'>
								<PostPreviewCard />
							</div>
							<div className='col-md-6'>
								<PostPreviewCard />
							</div>
							<div className='col-md-6'>
								<PostPreviewCard />
							</div>
						</div>
					</DescriptionCard>
					<DescriptionCard title='fashion and lifestyle'>
						<div className='row'>
							<div className='col-md-6 col-lg-4'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-6 col-lg-4'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-6 col-lg-4'>
								<PostPreviewCard size='small' />
							</div>
						</div>
					</DescriptionCard>
				</div>
				<div className='col-md-4 order-sm-last order-md-first'>
					<DescriptionCard title='Social media'>
						<SocialWidget />
					</DescriptionCard>
					<DescriptionCard title='Categories'>
						<CategoryWidget />
					</DescriptionCard>
				</div>
				<div className='col-12'>
					<DescriptionCard title='Science and Techonoly'>
						<div className='row'>
							<div className='col-md-6 col-lg-4'>
								<PostPreviewCard size='x-small' />
							</div>
							<div className='col-md-6 col-lg-4'>
								<PostPreviewCard size='x-small' />
							</div>
							<div className='col-md-6 col-lg-4'>
								<PostPreviewCard size='x-small' />
							</div>
							<div className='col-md-6 col-lg-4'>
								<PostPreviewCard size='x-small' />
							</div>
							<div className='col-md-6 col-lg-4'>
								<PostPreviewCard size='x-small' />
							</div>
							<div className='col-md-6 col-lg-4'>
								<PostPreviewCard size='x-small' />
							</div>
						</div>
					</DescriptionCard>
				</div>
				<div className='col-md-12'>
					<DescriptionCard title='fashion and lifestyle'>
						<div className='row'>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
						</div>
					</DescriptionCard>
				</div>
				<div className='col-md-12'>
					<DescriptionCard title='fashion and lifestyle'>
						<div className='row'>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
						</div>
					</DescriptionCard>
				</div>
				<div className='col-md-12'>
					<DescriptionCard title='fashion and lifestyle'>
						<div className='row'>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
						</div>
					</DescriptionCard>
				</div>
				<div className='col-md-12'>
					<DescriptionCard title='fashion and lifestyle'>
						<div className='row'>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
						</div>
					</DescriptionCard>
				</div>
				<div className='col-md-12'>
					<DescriptionCard title='fashion and lifestyle'>
						<div className='row'>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
							<div className='col-md-4 col-lg-3'>
								<PostPreviewCard size='small' />
							</div>
						</div>
					</DescriptionCard>
				</div>
			</div>
		</div>
	</HomePageContainer>
);

export default HomePage;
