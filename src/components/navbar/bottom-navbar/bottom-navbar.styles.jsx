import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { fadeIn, size } from '../../../assets/base-config/base-config.styles';

export const BottomNavbarContainer = styled.div`
	display: flex;
	background: ${props => props.theme.White};
	align-content: center;
	align-items: center;
	border-bottom: 1px solid ${props => props.theme.Grey1};
	transition: transform 1s linear;
	@media (max-width: ${size.sm}) {
		display: none;
	}
`;
export const NavLinksListContainer = styled.nav`
	margin: 0 auto;
	padding: 5px 15px;
`;
export const NavLinksContainer = styled.ul`
	display: flex;
	gap: 40px;
	list-style: none;
	padding: 0 10px;
	transition: all 1.5s linear;
`;
export const NavLinks = styled.li`
	font-weight: 600;
	animation: ${fadeIn} 1s linear;
`;

export const NavLinkItem = styled(NavLink)`
	outline: none;
`;
