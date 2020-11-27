import styled from 'styled-components';

import {
	fadeIn,
	colors,
	size
} from '../../../assets/base-config/base-config.styles';

export const BottomNavbarContainer = styled.div`
	display: flex;
	background: ${colors.White};
	align-content: center;
	align-items: center;
	border-bottom: 1px solid ${colors.Grey1};
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
`;
export const NavLinks = styled.li`
	font-weight: 600;
	animation: ${fadeIn} 1s linear;
`;

export const NavLink = styled.a`
	outline: none;
	&::before,
	::after {
		display: inline-block;
		opacity: 0;
		transition: transform 0.3s, opacity 0.2s;
	}
	&::before {
		content: '[';
		margin-right: 10px;
		transform: translateX(20px);
	}
	&::after {
		content: ']';
		margin-left: 10px;
		transform: translateX(-20px);
	}
	&:hover,
	:focus {
		&::before,
		::after {
			opacity: 1;
			transform: translateX(0);
		}
	}
`;
