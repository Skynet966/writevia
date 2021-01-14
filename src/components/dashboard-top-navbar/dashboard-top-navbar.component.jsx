import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styled from 'styled-components';
import { screenSize } from '../../App.styles';
import { toggleSideNav, toggleTheme } from '../../redux/app/app.actions';
import { selectThemeMode } from '../../redux/app/app.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

export const DashboardTopNavbarContainer = styled.header`
	position: fixed;
	background: grey;
	width: 100vw;
	padding: 20px 30px;
	transition: background 1s ease;
	background: ${({ theme }) => theme.Header};
	border-bottom: 1px solid ${({ theme }) => theme.LineFX};
	box-shadow: 0px -8px 14px black;
`;
export const TopNavbarItems = styled.ul`
	display: flex;
	flex-flow: row-reverse;
	align-items: center;
	gap: 30px;
`;
export const NavbarItem = styled.div``;

export const UserProfile = styled.div`
	display: flex;
	flex-flow: row;
	gap: 10px;
	align-items: center;
`;
export const UserName = styled.a`
	font-size: 1em;
	font-weight: 500;
	cursor: pointer;
	@media (max-width: ${screenSize.md}) {
		display: none;
	}
`;
export const ProfilePic = styled.img`
	border-radius: 30px;
	width: 36px;
	height: 36px;
`;
export const Icon = styled.i`
	color: ${({ theme }) => theme.HeaderText};
	@media (min-width: ${screenSize.lg}) {
		display: none;
	}
`;

const DashboardTopNavbar = ({ user, mode, toggleSideNav, toggleTheme }) => (
	<DashboardTopNavbarContainer>
		<TopNavbarItems>
			<NavbarItem>
				<Icon className='fa fa-bars' onClick={toggleSideNav} />
			</NavbarItem>
			<NavbarItem>
				<UserProfile>
					<ProfilePic src={user ? user.picture : ''} alt='profile pic' />
					<UserName onClick={e => e.preventDefault()}>
						{user ? user.name : 'LogIn First'}
					</UserName>
				</UserProfile>
			</NavbarItem>
			<NavbarItem>
				{mode ? (
					<i className='fa fa-moon-o moon' onClick={toggleTheme} />
				) : (
					<i className='fa fa-sun-o sun' onClick={toggleTheme} />
				)}
			</NavbarItem>
		</TopNavbarItems>
	</DashboardTopNavbarContainer>
);

const mapStateToProps = createStructuredSelector({
	mode: selectThemeMode,
	user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	toggleTheme: () => dispatch(toggleTheme()),
	toggleSideNav: () => dispatch(toggleSideNav())
	// signOut: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTopNavbar);
