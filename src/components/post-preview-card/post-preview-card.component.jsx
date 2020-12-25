import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { screenSize } from '../../App.styles';

export const PostPreviewCardContainer = styled.div`
	display: flex;
	flex-flow: ${({ size }) => (size === 'x-small' ? 'row' : 'column')};
	cursor: pointer;
	align-items: ${({ size }) => (size === 'x-small' ? 'center' : '')};
	margin-bottom: 20px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 4px 4px rgba(0, 0, 0, 0.23);
	font-size: ${({ size }) =>
		size === 'x-small' ? '15px' : size === 'small' ? 'small' : ''};
	@media (max-width: ${screenSize.sm}) {
		font-size: unset;
	}
`;

export const PostImageContainer = styled.div`
	overflow: hidden;
	width: ${({ size }) => (size === 'x-small' ? '60%' : '')};
`;
export const PostImage = styled.img`
	width: 100%;
	height: 100%;
	transition: transform 1s linear;
	&:hover,
	:focus {
		transform: scale(1.1);
	}
`;

export const PostCardContainer = styled.div`
	padding: ${({ size }) =>
		size === 'x-small' ? '0 10px' : size === 'small' ? '10px' : '20px'};
	margin-left: ${({ size }) => (size ? '' : '10px')};
	margin-top: ${({ size }) => (size ? '' : '-55px')};
	z-index: 0;
	background: ${({ theme }) => theme.Body};
	@media (max-width: ${screenSize.sm}) {
		margin: 0;
		padding: ${({ size }) => (size === 'x-small' ? '0 10px' : '20px')};
		font-size: ${({ size }) => (size === 'x-small' ? '12px' : '')};
	}
`;

export const PostCardHeader = styled.div`
	display: flex;
	place-content: space-between;
	margin-bottom: 15px;
	align-items: center;
`;
export const PostCategory = styled(Link)`
	text-transform: uppercase;
	font-weight: 700;
	font-size: 0.9em;
	color: ${({ theme }) => theme.ActiveLink};
`;
export const PostShare = styled.ul`
	display: ${({ size }) => (size === 'x-small' ? 'none' : 'flex')};
	width: 40%;
	place-content: space-around;
`;
export const ShareBtn = styled.li``;
export const Btn = styled.a``;

export const PostCardBody = styled.div`
	text-align: left;
`;
export const PostTitle = styled.h3`
	@media (max-width: ${screenSize.sm}) {
		font-size: ${({ size }) => (size === 'x-small' ? '12px' : '20px')};
	}
`;
export const PostDesc = styled.p`
	display: ${({ size }) => (size === 'x-small' ? 'none' : '')};
`;

export const PostCardFooter = styled.div``;
export const PostMetaData = styled.ul`
	display: flex;
	flex-flow: wrap;
	gap: 15px;
`;
export const Data = styled.li``;

const PostPreviewCard = ({ size }) => (
	<PostPreviewCardContainer size={size}>
		<PostImageContainer size={size}>
			<PostImage
				src='https://writevia.gumlet.io/Upload/1595242693.jpg?ar=3%3A2&w=360&dpr=1.3'
				alt='stringifier'
			/>
		</PostImageContainer>
		<PostCardContainer size={size}>
			<PostCardHeader>
				<PostCategory to='/test'>Technology</PostCategory>
				<PostShare size={size}>
					<ShareBtn>
						<Btn className='fa fa-facebook' />
					</ShareBtn>
					<ShareBtn>
						<Btn className='fa fa-twitter' />
					</ShareBtn>
					<ShareBtn>
						<Btn className='fa fa-pinterest' />
					</ShareBtn>
					<ShareBtn>
						<Btn className='fa fa-linkedin' />
					</ShareBtn>
				</PostShare>
			</PostCardHeader>
			<PostCardBody>
				<PostTitle
					as={size === 'x-small' ? 'h5' : size === 'small' ? 'h4' : 'h3'}
					size={size}
				>
					Government Policies to boost the economic growth
				</PostTitle>
				<PostDesc size={size}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam debitis
					iure quis modi rerum harum. In eos asperiores sapiente architecto!
				</PostDesc>
			</PostCardBody>
			<PostCardFooter>
				<PostMetaData>
					<Data>
						<span className='fa fa-user-o' />
						<span> Satish Kumar Yadav</span>
					</Data>
				</PostMetaData>
			</PostCardFooter>
		</PostCardContainer>
	</PostPreviewCardContainer>
);

export default PostPreviewCard;
