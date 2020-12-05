import styled from 'styled-components';
import { screenSize } from '../../App.styles';

export const DescriptionCardContainer = styled.div`
	margin: 20px 10px;
	text-align: left;
`;
export const CardTitleContainer = styled.div`
	margin: 0 0 20px;
	display: flex;
	align-items: center;
`;
export const CardTitle = styled.h3`
	text-transform: uppercase;
	font-weight: 700;
	min-width: fit-content;
	margin: 0 5px 0 0;
	font-size: ${props => props.size};
`;
export const LineFx = styled.div`
	height: 2px;
	width: 100%;
	background: ${({ theme }) => theme.LineFX};
`;
export const CardBodyContainer = styled.div`
	display: flex;
	@media (max-width: ${screenSize.sm}) {
		flex-direction: column;
	}
`;
export const CardImageContainer = styled.div`
	padding-right: 30px;
	margin: 0 0 20px;
	text-align: center;
`;
export const CardImage = styled.img`
	border-radius: 50%;
	width: 100px;
	height: 100px;
`;
export const CardBody = styled.div`
	width: -webkit-fill-available;
	@media (max-width: ${screenSize.sm}) {
		text-align: center;
	}
`;
export const BodyText = styled.p`
	margin: 0 0 20px;
	text-align: ${props => props.position};
`;
