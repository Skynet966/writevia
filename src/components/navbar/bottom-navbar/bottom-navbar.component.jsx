import React from 'react';

import {
	BottomNavbarContainer,
	NavLinksListContainer,
	NavLinksContainer,
	NavLinks,
	NavLinkItem
} from './bottom-navbar.styles';

const BottomNavbar = () => (
	<BottomNavbarContainer>
		<NavLinksListContainer>
			<NavLinksContainer>
				<NavLinks>
					<NavLinkItem exact activeClassName='active__link' to='/'>
						HOME
					</NavLinkItem>
				</NavLinks>
				<NavLinks>
					<NavLinkItem activeClassName='active__link' to='/blogs'>
						BLOGS
					</NavLinkItem>
				</NavLinks>
				<NavLinks>
					<NavLinkItem activeClassName='active__link' to='/contact-us'>
						CONTACT US
					</NavLinkItem>
				</NavLinks>
				<NavLinks>
					<NavLinkItem activeClassName='active__link' to='/our-team'>
						OUR TEAM
					</NavLinkItem>
				</NavLinks>
				<NavLinks>
					<NavLinkItem activeClassName='active__link' to='/about-us'>
						ABOUT US
					</NavLinkItem>
				</NavLinks>
			</NavLinksContainer>
		</NavLinksListContainer>
	</BottomNavbarContainer>
);

export default BottomNavbar;
