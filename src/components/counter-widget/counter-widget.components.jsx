import React from 'react';

import styled from 'styled-components';

export const CounterWidgetContainer = styled.div``;
export const CountersList = styled.ul`
	display: flex;
	flex-flow: wrap;
	border-radius: 5px;
	place-content: space-evenly;
`;
export const Counter = styled.li`
	font-family: 'Mulish', sans-serif;
	font-size: 1.1em;
	flex: 0 50%;
	display: flex;
	flex-flow: column;
	gap: 15px;
	padding: 20px 10px;
	color: ${props => props.theme.White};
	width: -webkit-fill-available;
	text-align: center;
	font-weight: 800;
	&::before {
		font-family: 'FontAwesome';
		font-size: 2em;
		font-weight: 400;
	}
	&::after {
		text-transform: uppercase;
		content: '${props => props.title}';
	}
`;

const CounterWidget = ({ visitors, writers, posts, likes }) => (
	<CounterWidgetContainer>
		<CountersList>
			<Counter className='fa fa-heart' title='likes'>
				{Number(likes).toLocaleString()}
			</Counter>
			<Counter className='fa fa-users' title='visitors'>
				{Number(visitors).toLocaleString()}
			</Counter>
			<Counter className='fa fa-user' title='writers'>
				{Number(writers).toLocaleString()}
			</Counter>
			<Counter className='fa fa-newspaper-o' title='posts'>
				{Number(posts).toLocaleString()}
			</Counter>
		</CountersList>
	</CounterWidgetContainer>
);

export default CounterWidget;
