import React from 'react';
import styles from './styles.scss';

interface ISearchInput {
	searchValue: string;
	setSearchValue: (searchValue: string) => void;
	placeholder?: string;
	onEnter: () => void;
}

const SearchInput = ({
	searchValue,
	placeholder,
	setSearchValue,
	onEnter,
}: ISearchInput) => {
	const handleKeyPress = (e: any) => {
		if (e.key === 'Enter'){
			onEnter();
		}
	}

	return (
		<div className={styles.searchInput}>
			<input
				onChange={(e) => setSearchValue(e.target.value)}
				value={searchValue}
				placeholder={placeholder}
				type="text"
				onKeyPress={handleKeyPress}
			/>
	
			<p>Sorturuvati by:</p>
		</div>
	);
}

export default SearchInput;
