import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ThemeProvider } from 'styled-components';

import Header from './containers/header/header.container';
import HomePage from './pages/home-page/home-page.component';
import ContactPage from './pages/contact-page/contact-page.component';
import TeamPage from './pages/team-page/team-page.component';
import AboutPage from './pages/about-page/about-page.component';

import GlobalStyle, { AppContainer } from './App.styles';

import { selectTheme } from './redux/app/app.selectors';

const App = ({ theme }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<AppContainer>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/contact-us' component={ContactPage} />
				<Route exact path='/our-team' component={TeamPage} />
				<Route exact path='/about-us' component={AboutPage} />
			</Switch>
		</AppContainer>
	</ThemeProvider>
);

const mapStateToProps = createStructuredSelector({
	theme: selectTheme
});

export default connect(mapStateToProps)(App);
