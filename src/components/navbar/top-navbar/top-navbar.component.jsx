import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	selectShowSearchbar,
	selectThemeMode
} from '../../../redux/app/app.selectors';
import {
	hideSearchbar,
	showSearchbar,
	toggleMenu,
	toggleTheme
} from '../../../redux/app/app.actions';

import {
	TopNavbarContainer,
	LogoContainer,
	Logo,
	MenuItemsContainer,
	MenuItem
} from './top-navbar.styles';
import SocialIcons from '../../social-icons/social-icons.component';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { signOutStart } from '../../../redux/user/user.actions';
import DropdownMenu from '../../dropdown-menu/dropdown-menu.component';

const TopNavbar = ({
	show,
	showSearch,
	hideSearch,
	mode,
	toggleTheme,
	toggleMenu,
	user,
	signOut
}) => {
	const [visibility, setVisibility] = useState(false);
	return (
		<TopNavbarContainer>
			<SocialIcons
				width='100px'
				sm_display='none'
				Usernames={{
					facebook: 'writevia',
					twitter: 'writevia',
					linkedin: 'writevia'
				}}
			/>
			<LogoContainer to='/'>
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

				{user ? (
					<MenuItem
						className={user.picture ? '' : 'fa fa-user'}
						image={user.picture || ''}
						onMouseEnter={() => setVisibility(true)}
						onClick={() => setVisibility(!visibility)}
					/>
				) : (
					<MenuItem
						className='fa fa-user'
						onMouseEnter={() => setVisibility(true)}
						onClick={() => setVisibility(!visibility)}
					/>
				)}
				{mode ? (
					<MenuItem className='fa fa-moon-o moon' onClick={toggleTheme} />
				) : (
					<MenuItem className='fa fa-sun-o sun' onClick={toggleTheme} />
				)}
				<MenuItem className='fa fa-bars' onClick={toggleMenu} />
				{user ? (
					<DropdownMenu
						handleBlur={() => setVisibility(false)}
						title={`Hi! ${user.name}`}
						options={[
							{ name: 'Profile', link: '/user/profile', icon: 'fa-user' },
							{ name: 'Settings', link: '/user/settings', icon: 'fa-cog' }
						]}
						fOption='Logout'
						fIcon='fa-sign-out'
						visibility={visibility.toString()}
						handleClick={signOut}
					/>
				) : (
					<DropdownMenu
						handleBlur={() => setVisibility(false)}
						title='Welecome!'
						options={[
							{ name: 'Sign In', link: '/user/login', icon: 'fa-sign-in' },
							{ name: 'Sign Up', link: '/user/register', icon: 'fa-user-plus' }
						]}
						visibility={visibility.toString()}
					/>
				)}
			</MenuItemsContainer>
		</TopNavbarContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	show: selectShowSearchbar,
	mode: selectThemeMode,
	user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	showSearch: () => dispatch(showSearchbar()),
	hideSearch: () => dispatch(hideSearchbar()),
	toggleTheme: () => dispatch(toggleTheme()),
	toggleMenu: () => dispatch(toggleMenu()),
	signOut: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar);
