import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { screenSize } from '../../App.styles';

export const AuthNavbarContainer = styled.nav`
	width: 100%;
	padding: 32px;
	display: flex;
	align-items: center;
	gap: 35px;
`;
export const LogoContainer = styled.div``;
export const Logo = styled.img`
	width: 130px;
`;

export const NavLinksContainer = styled.ul`
	display: flex;
	gap: 50px;
	@media (max-width: ${screenSize.sm}) {
		display: none;
	}
`;
export const NavLinkContainer = styled.li``;
export const LinkItem = styled(NavLink)`
	font-size: 1em;
	color: white;
	font-weight: 800;
`;

const AuthNavbar = () => (
	<AuthNavbarContainer>
		<LogoContainer>
			<Logo
				src='https://writevia.gumlet.io/img/logo/writevia_name_logo_alt.png'
				alt='writevia logo'
				width='150'
			/>
		</LogoContainer>
		<NavLinksContainer>
			<NavLinkContainer>
				<LinkItem to='/'>Home</LinkItem>
			</NavLinkContainer>
			<NavLinkContainer>
				<LinkItem to='/blogs'>Blogs</LinkItem>
			</NavLinkContainer>
			<NavLinkContainer>
				<LinkItem to='/contact-us'>Contact Us</LinkItem>
			</NavLinkContainer>
			<NavLinkContainer>
				<LinkItem to='/our-team'>Our Team</LinkItem>
			</NavLinkContainer>
			<NavLinkContainer>
				<LinkItem to='/about-us'>About Us</LinkItem>
			</NavLinkContainer>
		</NavLinksContainer>
	</AuthNavbarContainer>
);

export default AuthNavbar;
