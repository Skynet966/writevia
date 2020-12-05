import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { screenSize } from '../../App.styles';

export const InfoWidgetContainer = styled.div`
	display: flex;
	flex-flow: column;
	padding: 15px;
`;
export const WidgetHeader = styled.div`
	display: flex;
	margin-bottom: 10px;
`;
export const LogoContainer = styled(Link)``;
export const Logo = styled.img`
	width: 150px;
	@media (max-width: ${screenSize.sm}) {
		width: 120px;
	}
`;
export const WidgetBody = styled.div`
	display: flex;
	flex-flow: column;
	text-align: left;
`;
export const BodyText = styled.p`
	font-weight: 500;
	color: ${({ theme }) => theme.FooterText};
`;
export const WidgetFooter = styled.div`
	display: flex;
`;
