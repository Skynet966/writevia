import React from 'react';

import InfoWidget from '../components/info-widget/info-widget.component';

const TestPage = () => (
	<div>
		<InfoWidget
			imageUrl='https://writevia.gumlet.io/img/logo/writevia_name_logo.png'
			text={[
				'We provide you with the latest and the trending updates from sport, current affairs, culture, politics, economy, etc., with a lot of other super interesting articles including, but not limited to, movie reviews, interviews, candid conversations.',
				'Join us in this noble quest, and write your heart out.'
			]}
		/>
	</div>
);

export default TestPage;
