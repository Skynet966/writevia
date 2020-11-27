import styled from 'styled-components';
import { colors, size } from '../../../assets/base-config/base-config.styles';

export const TopNavbarContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	background: ${colors.White};
	justify-content: space-around;
	border-bottom: 1px solid ${colors.Grey1};
	@media (max-width: ${size.sm}) {
		justify-content: space-between;
		padding: 0 10px;
	}
`;

export const SocialMediaContainer = styled.div`
	display: flex;
	padding: 0 10px;
	width: 100px;
	align-items: center;
	justify-content: space-between;

	@media (max-width: ${size.sm}) {
		display: none;
	}
`;

export const SocialMediaIcon = styled.span`
	font-size: 1em;
`;

export const LogoContainer = styled.div`
	padding: 7px 0px;
	width: fit-content;
`;

export const Logo = styled.img`
	width: 160px;
`;

export const MenuItemsContainer = styled.div`
	display: flex;
	padding: 0 10px;
	width: 100px;
	align-items: center;
	justify-content: space-between;
`;

export const MenuItem = styled.div`
	font-size: 1em;
`;
