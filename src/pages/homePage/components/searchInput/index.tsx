import React, {useState} from 'react';
import SearchIcon from 'resources/icons/searchIcon';
import styles from './styles.scss';

const SearchInput = () => {
	const [searchPhrase, setSearchPhrase] = useState('');

	return (
		<div className={styles.input}>
			<div className={styles.input__icon}>
				<SearchIcon />
			</div>

			<input
				onChange={(e) => setSearchPhrase(e.target.value)}
				value={searchPhrase}
				type="text"
				placeholder="Search..."
			/>
		</div>
	);
};

export default SearchInput;
