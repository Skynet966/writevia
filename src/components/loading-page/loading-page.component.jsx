import React from 'react';

import styled from 'styled-components';

import { useLoading } from '@agney/react-loading';

const LoadingPageContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	height: 80vh;
	width: 100%;
	place-content: center;
`;
const LoadingIcon = styled.div`
	margin: 0 auto;
`;

const LoadingPage = () => {
	const { indicatorEl } = useLoading({
		loading: true,
		loaderProps: { className: 'page__loading' }
	});
	return (
		<LoadingPageContainer>
			<LoadingIcon>{indicatorEl}</LoadingIcon>
		</LoadingPageContainer>
	);
};
export default LoadingPage;
