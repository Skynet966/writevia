import React from 'react';

import PostPreviewCard from '../components/post-preview-card/post-preview-card.component';

const TestPage = () => (
	<div className='container'>
		<div className='row my-5'>
			<div className='col-md-6 col-lg-4'>
				<PostPreviewCard></PostPreviewCard>
			</div>
			<div className='col-md-6 col-lg-4'>
				<PostPreviewCard></PostPreviewCard>
			</div>
			<div className='col-md-6 col-lg-4'>
				<PostPreviewCard></PostPreviewCard>
			</div>
			<div className='col-md-6 col-lg-4'>
				<PostPreviewCard></PostPreviewCard>
			</div>
			<div className='col-md-6 col-lg-4'>
				<PostPreviewCard></PostPreviewCard>
			</div>
			<div className='col-md-6 col-lg-4'>
				<PostPreviewCard></PostPreviewCard>
			</div>
			<div className='col-md-6 col-lg-4'>
				<PostPreviewCard></PostPreviewCard>
			</div>
			<div className='col-md-6 col-lg-4'>
				<PostPreviewCard></PostPreviewCard>
			</div>
			<div className='col-md-6 col-lg-4'>
				<PostPreviewCard></PostPreviewCard>
			</div>
		</div>
		<div className='row'>
			<div className='col-md-8'>
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
			</div>
		</div>
		<div className='row'>
			<div className='col-md-12'>
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
				</div>
			</div>
		</div>
	</div>
);

export default TestPage;
