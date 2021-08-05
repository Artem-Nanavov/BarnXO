import React from 'react';
import SearchInput from '../searchInput';
import CatalogSelect from '../select/select';
import styles from './styles.scss';

const popularSelect = [
	{
		key: 'asfhglkafg',
		value: 'model',
	},
	{
		key: 'asdf234ra',
		value: 'quantity',
	},
	{
		key: '23qty4wu65jht4gr',
		value: 'rating',
	},
	{
		key: '708gw5rqefwtye',
		value: 'sort order',
	},
	{
		key: '236wegewyuhwyq3',
		value: 'date_added',
	},
	{
		key: '867456ywh4253yh',
		value: 'date_modified',
	},
];

const nameSelect = [
	{
		key: '708gw5rqefwtye',
		value: 'sorty by name',
	},
];

const costSelect = [
	{
		key: '1234rfgevs',
		value: 'price',
	},
];

const CatalogHeader = ({onEnter, searchValue, setSearchValue}: any) => {
	// const [searchValue, setSearchValue] = React.useState('');
	const [popularSorting, setPopularSorting] = React.useState(popularSelect[0]);
	const [nameSorting, setNameSorting] = React.useState(nameSelect[0]);
	const [costSorting, setCostSorting] = React.useState(costSelect[0]);

	return (
		<div className={styles.catalogHeader}>
			<SearchInput
				onEnter={onEnter}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				placeholder="Search ..."
			/>

			<div className={styles.catalogHeader__border} />

			<CatalogSelect
				setValue={setPopularSorting}
				values={popularSelect}
				value={popularSorting}
			/>

			<div className={styles.catalogHeader__border} />

			<CatalogSelect
				setValue={setNameSorting}
				values={nameSelect}
				value={nameSorting}
			/>

			<div className={styles.catalogHeader__border} />

			<CatalogSelect
				setValue={setCostSorting}
				values={costSelect}
				value={costSorting}
			/>
		</div>
	);
};

export default CatalogHeader;
