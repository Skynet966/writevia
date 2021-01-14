import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ThemeProvider } from 'styled-components';
import Swal from 'sweetalert2';

import GlobalStyle, { AppContainer } from './App.styles';
import { selectTheme } from './redux/app/app.selectors';

import BaseLayout from './layouts/base/base.layout.component';
import AuthLayout from './layouts/auth/auth.layout.component';
import DashboardLayout from './layouts/dashboard/dashboard.layout.component.jsx';
import { clearResponse, getCurrentUserStart } from './redux/user/user.actions';
import { selectResponse } from './redux/user/user.selectors';

const App = ({ theme, res, clearResponse, getCurrentUser }) => {
	useEffect(() => {
		getCurrentUser();
	}, [getCurrentUser]);
	useEffect(() => {
		const message = res.info
			? { title: 'Information!', icon: 'info', desc: res.info }
			: res.error
			? { title: 'Error!', icon: 'error', desc: res.error }
			: res.message
			? { title: 'Success!', icon: 'success', desc: res.message }
			: '';
		if (message) {
			Swal.fire({
				title: message.title,
				text: message.desc,
				icon: message.icon,
				confirmButtonText: 'OK'
			});
			clearResponse();
		}
	}, [res, clearResponse]);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AppContainer>
				<Switch>
					<Route path='/user' component={AuthLayout} />
					<Route path='/dashboard' component={DashboardLayout} />
					<Route exact path='*' component={BaseLayout} />
				</Switch>
			</AppContainer>
		</ThemeProvider>
	);
};

const mapStateToProps = createStructuredSelector({
	theme: selectTheme,
	res: selectResponse
});

const mapDispatchToProps = dispatch => ({
	getCurrentUser: () => dispatch(getCurrentUserStart()),
	clearResponse: () => dispatch(clearResponse())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
