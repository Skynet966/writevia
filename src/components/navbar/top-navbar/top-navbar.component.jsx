import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShowSearchbar } from '../../../redux/app/app.selectors';
import { hideSearchbar, showSearchbar } from '../../../redux/app/app.actions';

import {
	TopNavbarContainer,
	SocialMediaContainer,
	SocialMediaIcon,
	LogoContainer,
	Logo,
	MenuItemsContainer,
	MenuItem
} from './top-navbar.styles';

const TopNavbar = ({ show, showSearch, hideSearch }) => (
	<TopNavbarContainer>
		<SocialMediaContainer>
			<SocialMediaIcon className='fa fa-facebook' />
			<SocialMediaIcon className='fa fa-twitter' />
			<SocialMediaIcon className='fa fa-linkedin' />
		</SocialMediaContainer>
		<LogoContainer>
			<Logo
				src='https://writevia.gumlet.io/img/logo/writevia_name_logo.png'
				alt='writevia logo'
			/>
		</LogoContainer>
		<MenuItemsContainer>
			<MenuItem>
				{show ? (
					<span className='fa fa-times' onClick={hideSearch} />
				) : (
					<span className='fa fa-search' onClick={showSearch} />
				)}
			</MenuItem>
			<MenuItem>
				<span className='fa fa-user' />
			</MenuItem>
			<MenuItem>
				<span className='fa fa-bars' />
			</MenuItem>
		</MenuItemsContainer>
	</TopNavbarContainer>
);

const mapStateToProps = createStructuredSelector({
	show: selectShowSearchbar
});

const mapDispatchToProps = dispatch => ({
	showSearch: () => dispatch(showSearchbar()),
	hideSearch: () => dispatch(hideSearchbar())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar);
