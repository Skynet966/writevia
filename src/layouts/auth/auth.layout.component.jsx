import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoadingPage from '../../components/loading-page/loading-page.component';
import AuthHeader from '../../containers/auth-header/auth-header.container.component';
import FooterNavbar from '../../components/footer-navbar/footer-navbar.component';
import Copywrite from '../../components/copywrite/copywrite.component';

import styled from 'styled-components';
import PasswordRecovery from '../../containers/password-recovery/password-recovery.container.component';
import EmailVerification from '../../components/email-verification/email-verification.component';
import { createStructuredSelector } from 'reselect';
import {
	selectCurrentUser,
	selectRecovery
} from '../../redux/user/user.selectors';
import { connect } from 'react-redux';

const SignUpForm = lazy(() =>
	import('../../components/gnup-form/signup-form.component')
);
const LoginForm = lazy(() =>
	import('../../components/login-form/login-form.component')
);

export const AuthLayoutContainer = styled.div`
	position: absolute;
	background: #172b4d;
	z-index: -1;
	width: 100%;
	min-height: 100vh;
`;
export const AuthHeading = styled.h1`
	color: white;
`;
export const AuthPara = styled.p`
	color: white;
	font-size: 1.1em;
`;
export const GradientHeader = styled.div`
	position: absolute;
	width: 100%;
	height: 50vh;
	top: 0;
	z-index: -1;
	background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%);
`;

const AuthLayout = ({ user, recovery }) => {
	return (
		<AuthLayoutContainer>
			<GradientHeader />
			<div>
				<AuthHeader />
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<AuthHeading>Welcome!</AuthHeading>
							<Switch>
								<Route
									path='/user/login'
									render={() =>
										user ? (
											<Redirect to='/' />
										) : (
											<AuthPara>login here for writevia</AuthPara>
										)
									}
								/>
								<Route
									path='/user/register'
									render={() =>
										user && !user.verified ? (
											<Redirect to='/user/verification' />
										) : (
											<AuthPara>Register with writevia</AuthPara>
										)
									}
								/>
								<Route
									path='/user/password-recovery'
									render={() =>
										user ? (
											<Redirect to='/' />
										) : (
											<AuthPara>Password Recovery for your Account</AuthPara>
										)
									}
								/>
								<Route
									exact
									path='/user/verification'
									render={() =>
										user && user.verified ? (
											<Redirect to='/' />
										) : (
											<AuthPara>email verification for your Account</AuthPara>
										)
									}
								/>
								<Route
									path='/'
									render={() =>
										recovery.status ? (
											<Redirect to='/user/password-recovery' />
										) : user && user.verified ? (
											<Redirect to='/' />
										) : (
											<Redirect to='/user/verification' />
										)
									}
								/>
							</Switch>
						</div>
					</div>
					<div className='row justify-content-center mb-3'>
						<div className='col-md-5'>
							<Suspense fallback={<LoadingPage />}>
								<Switch>
									<Route path='/user/login' component={LoginForm} />
									<Route path='/user/register' component={SignUpForm} />
									<Route
										path='/user/password-recovery'
										render={() =>
											user ? <Redirect to='/' /> : <PasswordRecovery />
										}
									/>
									<Route
										path='/user/verification'
										component={EmailVerification}
									/>
								</Switch>
							</Suspense>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-6 order-md-last'>
							<FooterNavbar />
						</div>
						<div className='col-md-6 order-md-first'>
							<Copywrite />
						</div>
					</div>
				</div>
			</div>
		</AuthLayoutContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	user: selectCurrentUser,
	recovery: selectRecovery
});

export default connect(mapStateToProps)(AuthLayout);
