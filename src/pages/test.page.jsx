import React from 'react';
import LoginForm from '../components/login-form/login-form.component';
import SignUpForm from '../components/signup-form/signup-form.component';

const TestPage = () => (
	<div className='container'>
		<div className='row py-5'>
			<div className='col-md-8 col-lg-4'>
				<LoginForm />
			</div>
			<div className='col-md-4'>
				<SignUpForm />
			</div>
		</div>
	</div>
);

export default TestPage;
