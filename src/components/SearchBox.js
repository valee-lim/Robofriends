import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
	return(
		<div>
			<input
				className="pa3 ba b--green bg-lightest-blue ma mb4 searchbox"
				type='search'
				placeholder="search robots"
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;
