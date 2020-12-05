import React from 'react';

import styled from 'styled-components';

export const CarouselContainer = styled.div`
	margin-bottom: 40px;
`;

const Carousel = () => (
	<CarouselContainer>
		<div
			id='carousel'
			className='carousel slide carousel-fade'
			data-ride='carousel'
		>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<img
						src='https://writevia.gumlet.io/img/slider/news.jpg?ar=64:15'
						className='d-block w-100'
						alt='categories'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src='https://writevia.gumlet.io/img/slider/technology.jpg?ar=64:15'
						className='d-block w-100'
						alt='categories'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src='https://writevia.gumlet.io/img/slider/science.jpg?ar=64:15'
						className='d-block w-100'
						alt='categories'
					/>
				</div>
			</div>
			<a
				className='carousel-control-prev'
				href='#carousel'
				role='button'
				data-slide='prev'
			>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Previous</span>
			</a>
			<a
				className='carousel-control-next'
				href='#carousel'
				role='button'
				data-slide='next'
			>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Next</span>
			</a>
		</div>
	</CarouselContainer>
);

export default Carousel;
