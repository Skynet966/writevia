import React from 'react';

import DescriptionCard from '../../components/description-card/description-card.component';
import PageHeader from '../../components/page-header/page-header.component';

import { TeamPageContainer } from './team-page.styles';

const TeamPage = () => (
	<TeamPageContainer>
		<PageHeader
			title='Meet our team'
			subtitle={`Writevia's digital warriors, ready to harness the Force for good`}
		/>
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<DescriptionCard title='Developers' size='x-large' />
				</div>
			</div>
			<div className='row'>
				<div className='col-md-6'>
					<DescriptionCard
						size='large'
						title='satish kumar yadav'
						imageUrl='https://writevia.gumlet.io/img/team/Satish.jpg?ar=1%3A1&crop=faces&w=160&dpr=1.3'
						imageAlt='developer image'
						text={[
							`Didn’t you find our website engaging, catchy and dynamic? So, here is Satish, currently doing his MCA, who would always make you fall in love with the UI, which would otherwise give you the worst nightmares.`
						]}
						socialmedia={{ facebook: 'skynet12345', github: 'skynet966' }}
					/>
				</div>
				<div className='col-md-6'>
					<DescriptionCard
						title='Nitish Madan'
						size='large'
						imageUrl='https://writevia.gumlet.io/img/team/Nitish.jpg?ar=1%3A1&crop=faces&w=160&dpr=1.3'
						text={[
							'A pivotal person in this entrepreneurial venture, Nitish brings in the required technical expertise to help create this amazing platform. Always passionate about latest technologies, be it automobiles, electronic gadgets, etc., he has been leading from the front in running this venture.'
						]}
					/>
				</div>
			</div>
		</div>
	</TeamPageContainer>
);

export default TeamPage;
