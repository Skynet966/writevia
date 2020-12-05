import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleMenu } from '../../../redux/app/app.actions';
import { selectMenu } from '../../../redux/app/app.selectors';

import {
	BottomNavbarContainer,
	NavLinksContainer,
	NavLinks,
	NavLinkItem
} from './bottom-navbar.styles';

const BottomNavbar = ({ menu, toggleMenu }) => (
	<BottomNavbarContainer menu={menu}>
		<NavLinksContainer>
			<NavLinks>
				<NavLinkItem
					exact
					activeClassName='active__link'
					to='/'
					onClick={toggleMenu}
				>
					HOME
				</NavLinkItem>
			</NavLinks>
			<NavLinks>
				<NavLinkItem
					activeClassName='active__link'
					to='/blogs'
					onClick={toggleMenu}
				>
					BLOGS
				</NavLinkItem>
			</NavLinks>
			<NavLinks>
				<NavLinkItem
					activeClassName='active__link'
					to='/contact-us'
					onClick={toggleMenu}
				>
					CONTACT US
				</NavLinkItem>
			</NavLinks>
			<NavLinks>
				<NavLinkItem
					activeClassName='active__link'
					to='/our-team'
					onClick={toggleMenu}
				>
					OUR TEAM
				</NavLinkItem>
			</NavLinks>
			<NavLinks>
				<NavLinkItem
					activeClassName='active__link'
					to='/about-us'
					onClick={toggleMenu}
				>
					ABOUT US
				</NavLinkItem>
			</NavLinks>
		</NavLinksContainer>
	</BottomNavbarContainer>
);

const mapStateToProps = createStructuredSelector({
	menu: selectMenu
});

const mapDispatchToProps = dispatch => ({
	toggleMenu: () => dispatch(toggleMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavbar);
