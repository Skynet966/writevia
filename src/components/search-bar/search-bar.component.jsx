import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setSearchText } from '../../redux/app/app.actions';

import {
	selectSearchText,
	selectShowSearchbar
} from '../../redux/app/app.selectors';

import { InputBox, Search, SearchBarContainer } from './search-bar.styles';

const SearchBar = ({ show, searchText, setSearchTextValue }) => {
	useEffect(() => {
		if (show) document.getElementById('searchInputBox').focus();
	});
	return (
		<SearchBarContainer show={show}>
			<Search>
				<InputBox
					id='searchInputBox'
					type='search'
					onSubmit={e => e.defaultPrevented()}
					placeholder='Search...'
					autoFocus={show}
					value={searchText ? searchText : ''}
					onChange={e => setSearchTextValue(e.target.value)}
				/>
			</Search>
		</SearchBarContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	show: selectShowSearchbar,
	searchText: selectSearchText
});

const mapDispatchToProps = dispatch => ({
	setSearchTextValue: text => dispatch(setSearchText(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
