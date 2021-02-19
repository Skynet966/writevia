import React from 'react';

import TopNavbar from '../../components/navbar/top-navbar/top-navbar.component';
import BottomNavbar from '../../components/navbar/bottom-navbar/bottom-navbar.component';
import SearchBar from '../../components/search-bar/search-bar.component';

import './header.styles.css';

const Header = () => (
	<header className='header-container'>
		<nav className='header'>
			<TopNavbar />
			<SearchBar />
			<BottomNavbar />
		</nav>
		<div className='header__fx' />
	</header>
);

export default Header;
