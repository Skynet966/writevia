import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { BasicLayoutContainer } from './base.layout.styles';

import Header from '../../containers/header/header.container';
import LoadingPage from '../../components/loading-page/loading-page.component';
import Footer from '../../containers/footer/footer.component';
import CreatePostPage from '../../pages/create-post-page/create-post-page.page';

const HomePage = lazy(() =>
	import('../../pages/home-page/home-page.component')
);
const BlogsPage = lazy(() =>
	import('../../pages/blogs-page/blogs-page.component')
);
const ContactPage = lazy(() =>
	import('../../pages/contact-page/contact-page.component')
);
const TeamPage = lazy(() =>
	import('../../pages/team-page/team-page.component')
);
const AboutPage = lazy(() =>
	import('../../pages/about-page/about-page.component')
);

const BaseLayout = () => (
	<BasicLayoutContainer>
		<Header />
		<Suspense fallback={<LoadingPage />}>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/blogs' component={BlogsPage} />
				<Route exact path='/contact-us' component={ContactPage} />
				<Route exact path='/our-team' component={TeamPage} />
				<Route exact path='/about-us' component={AboutPage} />
				<Route exact path='/create-post' component={CreatePostPage} />
			</Switch>
		</Suspense>
		<Footer />
	</BasicLayoutContainer>
);

export default BaseLayout;
