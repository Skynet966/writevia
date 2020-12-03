import React from 'react';
import { useLoading } from '@agney/react-loading';

import { LoadingIcon, LoadingPageContainer } from './loading-page.styles';

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
