import React from 'react';

import styled from 'styled-components';
import FormInput from '../../components/form-input/form-input.component';

const CreatePostPageContainer = styled.div``;

const CreatePostPage = () => (
	<CreatePostPageContainer>
		<div className='container'>
			<div className='row py-5'>
				<div className='col-12'>
					<form className='row'>
						<div className='col-md-12'>
							<FormInput type='text' placeholder='Post title' required />
						</div>
						<div className='col-md-12'>
							<FormInput
								type='textarea'
								placeholder='Post Shot Desc'
								required
							/>
						</div>
						<div className='col-md-6'>
							<FormInput type='select' required>
								<option value='' selected disabled>
									{' '}
									-- Select the category --{' '}
								</option>
								<option value='Technology'>Technology</option>
								<option value='News'>News</option>
								<option value='Entertainment'>Entertainment</option>
								<option value='Sports'>Sports</option>
								<option value='Politics'>Politics</option>
								<option value='Science'>Science</option>
								<option value='Movies'>Movies</option>
								<option value='Education'>Education</option>
								<option value='Career'>Career</option>
								<option value='Trending'>Trending</option>
								<option value='Lifestyle'>Lifestyle</option>
								<option value='Food'>Food</option>
								<option value='Travel'>Travel</option>
								<option value='Gaming'>Gaming</option>
								<option value='Media'>Media</option>
								<option value='Fashion'>Fashion</option>
								<option value='Health'>Health</option>
								<option value='Finance'>Finance</option>
								<option value='Economy'>Economy</option>
							</FormInput>
						</div>
						<div className='col-md-6'>
							<div className='row'>
								<div className='col-md-6'>
									<FormInput type='url' placeholder='Post Image Source url' />
								</div>
								<div className='col-md-6'>
									<FormInput type='text' placeholder='Post Image Source Name' />
								</div>
							</div>
						</div>
						<div className='col-md-6'>
							<FormInput type='range' min='1' max='20' />
						</div>
						<div className='col-md-6'>
							<FormInput type='text' placeholder='post tags' />
						</div>
						<div className='col-md-6'>
							<FormInput type='select' required>
								<option defaultValue='' defaultSelected disabled>
									{' '}
									-- select Author --{' '}
								</option>
								<option value='Rahul Maulick'>Rahul Maulick</option>
								<option value='Amanpreet Kaur'>Amanpreet Kaur</option>
								<option value='Keertanya S.'>Keertanya S.</option>
							</FormInput>
						</div>
						<div className='col-md-6'></div>
						<div className='col-md-6'></div>
						<div className='col-md-6'></div>
					</form>
				</div>
			</div>
		</div>
	</CreatePostPageContainer>
);

export default CreatePostPage;
