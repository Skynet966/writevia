import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { fadeIn, screenSize } from '../../../App.styles';

export const NavLinksContainer = styled.ul`
	background: ${({ theme }) => theme.Header};
	display: flex;
	justify-content: center;
	padding: 20px 0;
	gap: 40px;
	list-style: none;
	@media (max-width: ${screenSize.sm}) {
		padding: 0 25px;
		transition: all 0.5s ease-in-out;
		flex-flow: column;
		gap: 0;
		margin: 0;
		height: 95vh;
		place-content: start;
		pointer-events: all;
		overflow-y: auto;
		width: 45%;
		text-align: end;
		transform: translateX(${({ menu }) => (menu ? '122%' : '222%')});
		box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.7);
	}
`;
export const NavLinks = styled.li`
	font-weight: 600;
	animation: ${fadeIn} 1s linear;
	@media (max-width: ${screenSize.sm}) {
		transition: all 0.5s ease-in;
		padding: 40px 5px;
		border-bottom: 1px solid ${({ theme }) => theme.LineFX};
	}
`;

export const NavLinkItem = styled(NavLink)`
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	outline: none;
`;
