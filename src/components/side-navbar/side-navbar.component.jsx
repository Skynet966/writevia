import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import BrandIcon from '../../assets/images/logo/writevia_logo.png';
import BrandLogoBlack from '../../assets/images/logo/writevia_name_logo.png';
import BrandLogoWhite from '../../assets/images/logo/writevia_name_logo_alt.png';

import styled from 'styled-components';
import { screenSize } from '../../App.styles';
import { connect } from 'react-redux';
import { selectSideNav, selectThemeMode } from '../../redux/app/app.selectors';
import { createStructuredSelector } from 'reselect';

export const SideNavbarContainer = styled.nav`
	max-width: 250px;
	height: 100vh;
	position: fixed;
	display: block;
	overflow-x: hidden;
	overflow-y: auto;
	text-align: left;
	background: ${({ theme }) => theme.Header};
	box-shadow: -12px 0px 20px 0px black;
	transition: all 1s ease;
	@media (max-width: ${screenSize.lg}) {
		width: 100%;
		transform: translateX(${({ status }) => (status ? '0%' : '-100%')});
	}
	@media (min-width: ${screenSize.lg}) {
		width: 68px;
		&:hover {
			width: 100%;
		}
	}
`;
export const SideNavbarHeader = styled.div``;
export const SideNavbarBrand = styled(Link)`
	display: block;
	padding: 16px;
	height: 80px;
	display: flex;
	flex-flow: row;
`;
export const SideNavbarBrandIcon = styled.img`
	max-width: 100%;
	max-height: 2rem;
`;
export const SideNavbarBrandNameLogo = styled.img`
	max-width: 100%;
	max-height: 2rem;
	transition: all 0.5s ease;
	@media (min-width: ${screenSize.lg}) {
		visibility: hidden;
		${SideNavbarContainer}:hover & {
			visibility: visible;
		}
	}
`;

export const SideNavbarNavLinks = styled.ul`
	display: flex;
	flex-flow: column;
	gap: 5px;
`;

export const SideNavbarNavLink = styled(NavLink)`
	padding: 1em;
	display: flex;
	flex-flow: row;
	margin: 0 0.5em;
	border-radius: 10px;
	transition: background 0.3s ease-in-out;
	&::before {
		width: 15px;
		font-size: 1.2em;
		color: ${({ color }) => color || ''};
	}
	&:hover {
		background: ${({ theme }) => theme.Selector};
	}
`;
export const SideNavbarLinkText = styled.h4`
	font-family: 'Montserrat', sans-serif;
	font-size: 1em;
	font-weight: 500;
	margin: 0 0 0 15px;
	transition: all 0.5s ease;
	@media (min-width: ${screenSize.lg}) {
		visibility: hidden;
		${SideNavbarContainer}:hover & {
			visibility: visible;
		}
	}
`;

const SideNavbar = ({ sideNav, mode }) => {
	const selectedLink = {
		background: mode ? 'whitesmoke' : '#f5f5f53d'
	};
	return (
		<SideNavbarContainer status={sideNav}>
			<SideNavbarHeader>
				<SideNavbarBrand to='/'>
					<SideNavbarBrandIcon src={BrandIcon} alt='Brand Icon' />
					<SideNavbarBrandNameLogo
						src={mode ? BrandLogoBlack : BrandLogoWhite}
						alt='Brand Logo'
					/>
				</SideNavbarBrand>
				<SideNavbarNavLinks>
					<SideNavbarNavLink
						activeStyle={selectedLink}
						className='fa fa-home'
						color='lightblue'
						to='/dashboard/home'
					>
						<SideNavbarLinkText>Home</SideNavbarLinkText>
					</SideNavbarNavLink>
					<SideNavbarNavLink
						activeStyle={selectedLink}
						className='fa fa-file-text'
						color='lightblue'
						to='/dashboard/Posts'
					>
						<SideNavbarLinkText>Posts</SideNavbarLinkText>
					</SideNavbarNavLink>
					<SideNavbarNavLink
						activeStyle={selectedLink}
						className='fa fa-user'
						color='lightblue'
						to='/dashboard/Admins'
					>
						<SideNavbarLinkText>Admins</SideNavbarLinkText>
					</SideNavbarNavLink>
					<SideNavbarNavLink
						activeStyle={selectedLink}
						className='fa fa-comments'
						color='lightblue'
						to='/dashboard/Comments'
					>
						<SideNavbarLinkText>Comments</SideNavbarLinkText>
					</SideNavbarNavLink>
					<SideNavbarNavLink
						activeStyle={selectedLink}
						className='fa fa-list-ul'
						color='lightblue'
						to='/dashboard/categories'
					>
						<SideNavbarLinkText>Categories</SideNavbarLinkText>
					</SideNavbarNavLink>
					<SideNavbarNavLink
						activeStyle={selectedLink}
						className='fa fa-user-circle'
						color='lightblue'
						to='/dashboard/profile'
					>
						<SideNavbarLinkText>Profile</SideNavbarLinkText>
					</SideNavbarNavLink>
					<SideNavbarNavLink
						activeStyle={selectedLink}
						className='fa fa-sign-out'
						color='lightblue'
						to='/dashboard/logout'
					>
						<SideNavbarLinkText>Logout</SideNavbarLinkText>
					</SideNavbarNavLink>
				</SideNavbarNavLinks>
			</SideNavbarHeader>
		</SideNavbarContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	sideNav: selectSideNav,
	mode: selectThemeMode
});

export default connect(mapStateToProps)(SideNavbar);
