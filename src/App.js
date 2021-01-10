import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ThemeProvider } from 'styled-components';

import GlobalStyle, { AppContainer } from './App.styles';
import { selectTheme } from './redux/app/app.selectors';
import { selectCurrentUser } from './redux/user/user.selectors';

import BaseLayout from './layouts/base/base.layout.component';
import AuthLayout from './layouts/auth/auth.layout.component';
import { getCurrentUserStart } from './redux/user/user.actions';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const App = ({ theme, user, getCurrentUser }) => {
	useEffect(() => {
		getCurrentUser();
	}, [getCurrentUser]);
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AppContainer>
				<Switch>
					<Route path='/user' component={AuthLayout} />
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
	getCurrentUser: () => dispatch(getCurrentUserStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
