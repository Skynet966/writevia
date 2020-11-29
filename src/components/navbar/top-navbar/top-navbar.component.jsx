import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	selectShowSearchbar,
	selectThemeMode
} from '../../../redux/app/app.selectors';
import {
	hideSearchbar,
	showSearchbar,
	toggleTheme
} from '../../../redux/app/app.actions';

import {
	TopNavbarContainer,
	SocialMediaContainer,
	SocialMediaIcon,
	LogoContainer,
	Logo,
	MenuItemsContainer,
	MenuItem
} from './top-navbar.styles';

const TopNavbar = ({ show, showSearch, hideSearch, mode, toggleTheme }) => (
	<TopNavbarContainer>
		<SocialMediaContainer>
			<SocialMediaIcon className='fa fa-facebook' />
			<SocialMediaIcon className='fa fa-twitter' />
			<SocialMediaIcon className='fa fa-linkedin' />
		</SocialMediaContainer>
		<LogoContainer>
			<Logo
				width='160'
				src={`https://writevia.gumlet.io/img/logo/writevia_name_logo${
					mode ? '.png' : '_alt.png'
				}`}
				alt='writevia logo'
			/>
		</LogoContainer>
		<MenuItemsContainer>
			{show ? (
				<MenuItem className='fa fa-times' onClick={hideSearch} />
			) : (
				<MenuItem className='fa fa-search' onClick={showSearch} />
			)}
			<MenuItem className='fa fa-user' />
			{mode ? (
				<MenuItem className='fa fa-moon-o moon' onClick={toggleTheme} />
			) : (
				<MenuItem className='fa fa-sun-o sun' onClick={toggleTheme} />
			)}
			<MenuItem className='fa fa-bars' />
		</MenuItemsContainer>
	</TopNavbarContainer>
);

const mapStateToProps = createStructuredSelector({
	show: selectShowSearchbar,
	mode: selectThemeMode
});

const mapDispatchToProps = dispatch => ({
	showSearch: () => dispatch(showSearchbar()),
	hideSearch: () => dispatch(hideSearchbar()),
	toggleTheme: () => dispatch(toggleTheme())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar);
