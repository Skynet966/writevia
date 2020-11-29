import React, { useState } from 'react';

import { useLoading } from '@agney/react-loading';

const ListElement = () => {
	const [loading, setloading] = useState(true);
	const { indicatorEl } = useLoading({
		loading,
		loaderProps: { className: 'image__loading' }
	});
	return (
		<section>
			{indicatorEl}
            <img
				onLoad={() => setloading(false)}
				alt='loading'
				width='100'
				height='100'
				src='https://www.learningcontainer.com/wp-content/uploads/2020/08/Large-Sample-png-Image-download-for-Testing.png'
			/>
		</section>
	);
};

export default ListElement;
