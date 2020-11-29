import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ThemeProvider } from 'styled-components';

import GlobalStyle, { AppContainer } from './App.styles';
import { selectTheme } from './redux/app/app.selectors';
import ListElement from './components/list/list.component';

const Header = lazy(() => import('./containers/header/header.container'));
const HomePage = lazy(() => import('./pages/home-page/home-page.component'));
const ContactPage = lazy(() =>
	import('./pages/contact-page/contact-page.component')
);
const TeamPage = lazy(() => import('./pages/team-page/team-page.component'));
const AboutPage = lazy(() => import('./pages/about-page/about-page.component'));



const App = ({ theme }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<AppContainer>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/contact-us' component={ContactPage} />
					<Route exact path='/our-team' component={TeamPage} />
					<Route exact path='/about-us' component={AboutPage} />
					<Route exact path='/test' component={ListElement} />
				</Switch>
			</Suspense>
		</AppContainer>
	</ThemeProvider>
);

const mapStateToProps = createStructuredSelector({
	theme: selectTheme
});

export default connect(mapStateToProps)(App);
