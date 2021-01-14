import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styled from 'styled-components';
import ButtonInput from '../../../components/button-input/button-input.component';
import Editor from '../../../components/editor/editor.component';
import FormInput from '../../../components/form-input/form-input.component';
import { categoriesFetching } from '../../../redux/categories/categories.action';
import { selectCategoriesList } from '../../../redux/categories/categories.selectors';
import { postCreationStart } from '../../../redux/post/post.actions';
import { selectCreatingPost } from '../../../redux/post/post.selectors';

const CreatePostPageContainer = styled.div``;

const CreatePostPage = ({
	creatingPost,
	createPost,
	categories,
	fetchCategories
}) => {
	useEffect(() => {
		fetchCategories();
	}, [fetchCategories]);

	const [isNext, setIsNext] = useState(false);

	useEffect(() => {
		console.log(creatingPost);
		setIsNext(creatingPost.id !== '' ? true : false);
	}, [creatingPost]);

	const [metadata, setMetadata] = useState(
		creatingPost.metadata || {
			title: '',
			desc: '',
			category: '',
			image: {
				url: '',
				source: ''
			},
			readTime: '',
			tags: ''
		}
	);

	const handleChange = e => {
		let { name, value } = e.target;
		if (name === 'tags') {
			value = value.split(',');
		}
		name === 'url' || name === 'source'
			? setMetadata({
					...metadata,
					image: { ...metadata.image, [name]: value }
			  })
			: setMetadata({ ...metadata, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(metadata);
		createPost(metadata);
	};
	return (
		<CreatePostPageContainer>
			<div className='container'>
				<div className='row py-5'>
					<div className='col-12'>
						{isNext ? (
							<Editor />
						) : (
							<form className='row' onSubmit={handleSubmit}>
								<div className='col-md-12'>
									<FormInput
										type='text'
										name='title'
										placeholder='Post title'
										handleChange={handleChange}
										value={metadata.title}
										required
									/>
								</div>
								<div className='col-md-12'>
									<FormInput
										type='textarea'
										name='desc'
										placeholder='Post Shot Desc'
										handleChange={handleChange}
										value={metadata.desc}
										required
									/>
								</div>
								<div className='col-md-6'>
									<FormInput
										name='category'
										type='select'
										handleChange={handleChange}
										value={metadata.category}
										required
									>
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
												name='url'
												type='url'
												placeholder='Post Image Source url'
												handleChange={handleChange}
												value={metadata.image.url}
												required
											/>
										</div>
										<div className='col-md-6'>
											<FormInput
												name='source'
												type='text'
												placeholder='Post Image Source Name'
												handleChange={handleChange}
												value={metadata.image.source}
												required
											/>
										</div>
									</div>
								</div>
								<div className='col-md-6'>
									<FormInput
										name='readTime'
										type='range'
										min='1'
										max='20'
										handleChange={handleChange}
										value={metadata.readTime}
										required
									/>
								</div>
								<div className='col-md-6'>
									<FormInput
										name='tags'
										type='text'
										placeholder='post tags'
										handleChange={handleChange}
										value={metadata.tags.toString()}
										required
									/>
								</div>
								<div className='col-md-12'>
									<ButtonInput type='submit' text='Next' />
								</div>
							</form>
						)}
					</div>
				</div>
			</div>
		</CreatePostPageContainer>
	);
};
const mapStateToProps = createStructuredSelector({
	categories: selectCategoriesList,
	creatingPost: selectCreatingPost
});

const mapDispatchToProps = dispatch => ({
	fetchCategories: () => dispatch(categoriesFetching()),
	createPost: metadata => dispatch(postCreationStart(metadata))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostPage);
