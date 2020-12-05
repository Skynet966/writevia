import React from 'react';

import { ContactPageContainer } from './contact-page.styles';

import PageHeader from '../../components/page-header/page-header.component';
import IconatedInfoLink from '../../components/iconated-info-link/iconated-info-link.component';
import ContactForm from '../../components/contact-form/contact-form.component';

const ContactPage = () => (
	<ContactPageContainer>
		<PageHeader
			title='Connect with us'
			subtitle='Give your valuable feedback to improve user experience and content on our website. We value your experience.'
		/>
		<div className='container'>
			<div className='row'>
				<div className='col-md-8'>
					<ContactForm />
				</div>
				<div className='col-md-4'>
					<IconatedInfoLink
						title='Contact Information'
						heading={`Writevia is there 24 X 7 for you.`}
						phone='+91 98717 78947'
						email='support@writevia.com'
						location={{
							name: 'New Delhi, India',
							link: 'https://goo.gl/maps/JWJDrEBC8aphHLGY6'
						}}
					/>
				</div>
			</div>
		</div>
	</ContactPageContainer>
);

export default ContactPage;
