import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ThemeProvider } from 'styled-components';

import GlobalStyle, { AppContainer } from './App.styles';
import { selectTheme } from './redux/app/app.selectors';
import { selectCurrentUser } from './redux/user/user.selectors';

import BaseLayout from './layouts/base/base.layout.component';
import AuthLayout from './layouts/auth/auth.layout.component';
import { getCurrentUser } from './redux/user/user.actions';
import { useEffect } from 'react';

const App = ({ theme, user, getCurrentUser }) => {
	useEffect(() => {
		getCurrentUser();
	}, [getCurrentUser]);
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AppContainer>
				<Switch>
					{/* <Route exact path='/user/verification' render={() => <AuthLayout />} /> */}
					<Route path='/user' render={() => <AuthLayout />} />
					<Route exact path='*' component={BaseLayout} />
				</Switch>
			</AppContainer>
		</ThemeProvider>
	);
};

const mapStateToProps = createStructuredSelector({
	theme: selectTheme,
	user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	getCurrentUser: () => dispatch(getCurrentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
