import styled from 'styled-components';

import { colors, size } from '../../assets/base-config/base-config.styles';

export const PageHeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 120px 0 80px;
	background: ${colors.Dark};
	color: ${colors.White};
`;
export const HeadingContainer = styled.div`
	padding: 0 50px;
	@media (max-width: ${size.sm}) {
		padding: 0 15px;
	}
`;
export const Heading = styled.h1`
	text-transform: uppercase;
	font-size: 2.5em;
	font-weight: 700;
	margin: 0 0 10px;
	text-shadow: 0 0 10px #000;
	@media (max-width: ${size.sm}) {
		font-size: 2em;
	}
`;
export const SubHeading = styled.h2`
	font-weight: 400;
	margin: 0 0 5px;
	line-height: 30px;
	text-shadow: 0 0 10px #000;
	@media (max-width: ${size.sm}) {
		font-size: 1em;
	}
`;
