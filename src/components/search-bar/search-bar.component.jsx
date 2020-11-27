import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { hideSearchbar } from '../../redux/app/app.actions';

import { selectShowSearchbar } from '../../redux/app/app.selectors';

import { InputBox, Search, SearchBarContainer } from './search-bar.styles';

const SearchBar = ({ show, hideSearch }) => {
	return (
		<SearchBarContainer show={show}>
			<Search>
				<InputBox
					type='search'
					onSubmit={e => e.defaultPrevented()}
					placeholder='Search...'
					autoFocus={show}
					onBlur={hideSearch}
				/>
			</Search>
		</SearchBarContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	show: selectShowSearchbar
});

const mapDispatchToProps = dispatch => ({
	hideSearch: () => dispatch(hideSearchbar())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
