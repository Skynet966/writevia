import React from 'react';

import DescriptionCard from '../../components/description-card/description-card.component';
import FormInput from '../../components/form-input/form-input.component';

import styled from 'styled-components';

export const ContactFormContainer = styled.div`
	display: flex;
	flex-flow: column;
`;

const ContactForm = () => (
	<DescriptionCard
		title='Write to us'
		text={[
			'Our Team will listen to everyone we are open minded and always exceited to help or imporove our services based on feedback. So fire your query towards us and we will happy to help you.'
		]}
		position='left'
	>
		<ContactFormContainer>
			<FormInput type='text' placeholder='Name' />
			<FormInput type='email' placeholder='Email' />
			<FormInput type='tel' placeholder='Phone' />
			<FormInput type='textarea' placeholder='Message...' />
		</ContactFormContainer>
	</DescriptionCard>
);

export default ContactForm;
