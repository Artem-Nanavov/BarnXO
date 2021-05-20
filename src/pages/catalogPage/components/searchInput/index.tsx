import React from 'react';
import styles from './styles.scss';

interface ISearchInput {
	searchValue: string;
	setSearchValue: (searchValue: string) => void;
	placeholder?: string;
}

const SearchInput = ({
	searchValue,
	placeholder,
	setSearchValue,
}: ISearchInput) => (
	<div className={styles.searchInput}>
		<input
			onChange={(e) => setSearchValue(e.target.value)}
			value={searchValue}
			placeholder={placeholder}
			type="text"
		/>

		<p>Sorturuvati by:</p>
	</div>
);

export default SearchInput;
