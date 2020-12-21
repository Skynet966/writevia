import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ThemeProvider } from 'styled-components';

import GlobalStyle, { AppContainer } from './App.styles';
import { selectTheme } from './redux/app/app.selectors';
import { selectCurrentUser } from './redux/user/user.selectors';

import BaseLayout from './layouts/base/base.layout.component';
import AuthLayout from './layouts/auth/auth.layout.component';

const App = ({ theme, user }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<AppContainer>
			<Switch>
				<Route path='/user/verification' component={AuthLayout} />
				<Route
					path='/user'
					render={() =>
						user ? (
							user.verified ? (
								<Redirect to='/' />
							) : (
								<Redirect to='/user/verification' />
							)
						) : (
							<AuthLayout user={user} />
						)
					}
				/>
				<Route exact path='*' component={BaseLayout} />
			</Switch>
		</AppContainer>
	</ThemeProvider>
);

const mapStateToProps = createStructuredSelector({
	theme: selectTheme,
	user: selectCurrentUser
});

export default connect(mapStateToProps)(App);
