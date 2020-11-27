import React from 'react';

import {
	BottomNavbarContainer,
	NavLinksListContainer,
	NavLinksContainer,
	NavLinks,
	NavLink
} from './bottom-navbar.styles';

const BottomNavbar = () => (
	<BottomNavbarContainer>
		<NavLinksListContainer>
			<NavLinksContainer>
				<NavLinks>
					<NavLink
						href='https://www.google.com'
						onClick={e => e.preventDefault()}
					>
						HOME
					</NavLink>
				</NavLinks>
				<NavLinks>
					<NavLink
						href='https://www.google.com'
						onClick={e => e.preventDefault()}
					>
						BLOGS
					</NavLink>
				</NavLinks>
				<NavLinks>
					<NavLink
						href='https://www.google.com'
						onClick={e => e.preventDefault()}
					>
						CONTACT US
					</NavLink>
				</NavLinks>
				<NavLinks>
					<NavLink
						href='https://www.google.com'
						onClick={e => e.preventDefault()}
					>
						OUR TEAM
					</NavLink>
				</NavLinks>
				<NavLinks>
					<NavLink
						href='https://www.google.com'
						onClick={e => e.preventDefault()}
					>
						ABOUT US
					</NavLink>
				</NavLinks>
			</NavLinksContainer>
		</NavLinksListContainer>
	</BottomNavbarContainer>
);

export default BottomNavbar;
