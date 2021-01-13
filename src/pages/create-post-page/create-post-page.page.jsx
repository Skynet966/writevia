import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styled from 'styled-components';
import Editor from '../../components/editor/editor.component';
import FormInput from '../../components/form-input/form-input.component';
import { categoriesFetching } from '../../redux/categories/categories.action';
import { selectCategoriesList } from '../../redux/categories/categories.selectors';

const CreatePostPageContainer = styled.div``;

const CreatePostPage = ({ categories, fetchCategories }) => {
	useEffect(() => {
		fetchCategories();
	}, [fetchCategories]);

	return (
		<CreatePostPageContainer>
			<div className='container'>
				<div className='row py-5'>
					<div className='col-12'>
						<form className='row'>
							<div className='col-md-12'>
								<FormInput
									type='text'
									name='title'
									placeholder='Post title'
									required
								/>
							</div>
							<div className='col-md-12'>
								<FormInput
									type='textarea'
									name='desc'
									placeholder='Post Shot Desc'
									required
								/>
							</div>
							<div className='col-md-6'>
								<FormInput name='category' type='select' required>
									<option value='' disabled>
										{' '}
										-- Select the category --{' '}
									</option>
									{categories.map(category => (
										<option key={category.created_at} value={category.title}>
											{category.title}
										</option>
									))}
								</FormInput>
							</div>
							<div className='col-md-6'>
								<div className='row'>
									<div className='col-md-6'>
										<FormInput
											name='imageUrl'
											type='url'
											placeholder='Post Image Source url'
										/>
									</div>
									<div className='col-md-6'>
										<FormInput
											name='imageSource'
											type='text'
											placeholder='Post Image Source Name'
										/>
									</div>
								</div>
							</div>
							<div className='col-md-6'>
								<FormInput name='readTime' type='range' min='1' max='20' />
							</div>
							<div className='col-md-6'>
								<FormInput name='tags' type='text' placeholder='post tags' />
							</div>
							<div className='col-md-12'>
								<Editor />
							</div>
							<div className='col-md-6'></div>
							<div className='col-md-6'></div>
						</form>
					</div>
				</div>
			</div>
		</CreatePostPageContainer>
	);
};
const mapStateToProps = createStructuredSelector({
	categories: selectCategoriesList
});

const mapDispatchToProps = dispatch => ({
	fetchCategories: () => dispatch(categoriesFetching())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostPage);
