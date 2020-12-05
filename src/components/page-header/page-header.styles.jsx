import styled from 'styled-components';
import { screenSize } from '../../App.styles';

export const PageHeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 120px 0 80px;
	background: ${({ theme }) => theme.Footer};
	color: ${({ theme }) => theme.HeaderText};
`;
export const HeadingContainer = styled.div`
	padding: 0 50px;
	@media (max-width: ${screenSize.sm}) {
		padding: 0 15px;
	}
`;
export const Heading = styled.h1`
	text-transform: uppercase;
	text-shadow: 0 0 10px #000;
	font-size: 2.5em;
	font-weight: 700;
	color: White;
	@media (max-width: ${screenSize.sm}) {
		font-size: 2em;
	}
`;
export const SubHeading = styled.h2`
	font-size: 1.5em;
	font-weight: 500;
	color: white;
	text-shadow: 0 0 10px #000;
	@media (max-width: ${screenSize.sm}) {
		font-size: 1em;
	}
`;
