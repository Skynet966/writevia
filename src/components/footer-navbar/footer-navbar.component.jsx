import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { color } from '../../App.styles';

export const FooterNavbarContainer = styled.nav`
	margin: 15px auto;
`;
export const FooterNavLinksContainer = styled.ul`
	display: flex;
	flex-flow: row;
	place-content: space-between;
`;
export const NavLinkContainer = styled.li``;
export const NavLink = styled(Link)`
	color: ${color.megan};
	font-weight: 700;
`;

const FooterNavbar = () => (
	<FooterNavbarContainer>
		<FooterNavLinksContainer>
			<NavLinkContainer>
				<NavLink to='/'>Home</NavLink>
			</NavLinkContainer>
			<NavLinkContainer>
				<NavLink to='/blogs'>Blogs</NavLink>
			</NavLinkContainer>
			<NavLinkContainer>
				<NavLink to='/contact-us'>Contact Us</NavLink>
			</NavLinkContainer>
			<NavLinkContainer>
				<NavLink to='/out-team'>Our Team</NavLink>
			</NavLinkContainer>
			<NavLinkContainer>
				<NavLink to='/about-us'>About Us</NavLink>
			</NavLinkContainer>
		</FooterNavLinksContainer>
	</FooterNavbarContainer>
);

export default FooterNavbar;
