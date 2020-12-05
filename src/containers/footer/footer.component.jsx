import React from 'react';

import DescriptionCard from '../../components/description-card/description-card.component';

import InfoWidget from '../../components/info-widget/info-widget.component';
import CategoryWidget from '../../components/category-widget/category-widget.component';
import TagsWidget from '../../components/tags-widget/tags-widget.component';
import CounterWidget from '../../components/counter-widget/counter-widget.components';

import { FooterContainer } from './footer.styles';

const Footer = () => (
	<FooterContainer>
		<div className='container'>
			<div className='row pt-5'>
				<div className='col-lg-3'>
					<InfoWidget
						imageUrl='https://writevia.gumlet.io/img/logo/writevia_name_logo_alt.png'
						imageAlt='writevia footer logo'
						text={[
							'We provide you with the latest and the trending updates from sport, current affairs, culture, politics, economy, etc., with a lot of other super interesting articles including, but not limited to, movie reviews, interviews, candid conversations.',
							'Join us in this noble quest, and write your heart out.'
						]}
					/>
				</div>
				<div className='col-lg-3'>
					<DescriptionCard size='medium' title='Categories' linefx={false}>
						<CategoryWidget />
					</DescriptionCard>
				</div>
				<div className='col-lg-3'>
					<DescriptionCard size='medium' title='Tags' linefx={false}>
						<TagsWidget
							tags={[
								'the',
								'quick',
								'brown',
								'fox',
								'jumps',
								'over',
								'the',
								'lazy',
								'dog'
							]}
						/>
					</DescriptionCard>
				</div>
				<div className='col-lg-3'>
					<CounterWidget
						visitors='999999999'
						likes='999999'
						writers='975'
						posts='238456'
					/>
				</div>
			</div>
		</div>
	</FooterContainer>
);

export default Footer;
