import React from 'react';
import CounterWidget from '../components/counter-widget/counter-widget.components';

import styled from 'styled-components';

const ColorCheck = styled.div`
	background: ${props => props.theme[props.bgColor]};
	height: 200px;
	width: 150px;
`;

const TestPage = () => (
	<div className='container'>
		<div className='row'>
			<ColorCheck bgColor='Body'></ColorCheck>
			<ColorCheck bgColor='Headers'></ColorCheck>
			<ColorCheck bgColor='Primary'></ColorCheck>
			<ColorCheck bgColor='Secondary'></ColorCheck>
			<ColorCheck bgColor='Loader'></ColorCheck>
			<ColorCheck bgColor='Dark'></ColorCheck>
			<ColorCheck bgColor='Grey1'></ColorCheck>
			<ColorCheck bgColor='Grey2'></ColorCheck>
			<ColorCheck bgColor='Grey3'></ColorCheck>
			<ColorCheck bgColor='White'></ColorCheck>
			<ColorCheck bgColor='Black'></ColorCheck>
			<ColorCheck bgColor='Muted'></ColorCheck>
			<ColorCheck bgColor='Link'></ColorCheck>
		</div>
	</div>
);

export default TestPage;
