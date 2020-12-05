import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { fadeIn, screenSize } from '../../../App.styles';

export const BottomNavbarContainer = styled.nav`
	display: flex;
	background: ${({ theme }) => theme.Header};
	place-content: center;
	border-bottom: 1px solid ${({ theme }) => theme.LineFX};
	transition: transform 1s linear;
	@media (max-width: ${screenSize.sm}) {
		display: ${({ menu }) => (menu ? 'flex' : 'none')};
		height: 95vh;
	}
`;
export const NavLinksContainer = styled.ul`
	display: flex;
	margin: 20px 0;
	gap: 40px;
	list-style: none;
	transition: all 1.5s linear;
	@media (max-width: ${screenSize.sm}) {
		flex-flow: column;
		gap: 0;
		margin: 0;
		place-content: space-evenly;
	}
`;
export const NavLinks = styled.li`
	font-weight: 600;
	animation: ${fadeIn} 1s linear;
	@media (max-width: ${screenSize.sm}) {
		width: 95vw;
		border-bottom: 1px solid ${({ theme }) => theme.LineFX};
		height: 11%;
	}
`;

export const NavLinkItem = styled(NavLink)`
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	outline: none;
	@media (max-width: ${screenSize.sm}) {
		padding: 5px;
		font-size: larger;
	}
`;
