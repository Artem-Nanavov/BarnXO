import React from 'react';
import SearchInput from '../searchInput';
import CatalogSelect from '../select/select';
import styles from './styles.scss';

const popularSelect = [
	{
		key: 'asfhglkafg',
		value: 'Popular',
	},
	{
		key: 'asdf234ra',
		value: 'Popular',
	},
	{
		key: '23qty4wu65jht4gr',
		value: 'Popular',
	},
	{
		key: '708gw5rqefwtye',
		value: 'Popular',
	},
];

const nameSelect = [
	{
		key: '708gw5rqefwtye',
		value: 'name',
	},
	{
		key: 'wjybet',
		value: 'name',
	},
	{
		key: '2sdfgwh4',
		value: 'name',
	},
	{
		key: '16qt25',
		value: 'name',
	},
];

const costSelect = [
	{
		key: '1234rfgevs',
		value: 'Cost',
	},
	{
		key: '32y45wgreag',
		value: 'Cost',
	},
	{
		key: '857r6hts',
		value: 'Cost',
	},
	{
		key: '97tu8bsevf',
		value: 'Cost',
	},
	{
		key: '089hwjf13',
		value: 'Cost',
	},
	{
		key: '90897tibnrsefvr',
		value: 'Cost',
	},
];

const CatalogHeader = () => {
	const [searchValue, setSearchValue] = React.useState('');
	const [popularSorting, setPopularSorting] = React.useState(popularSelect[0]);
	const [nameSorting, setNameSorting] = React.useState(nameSelect[0]);
	const [costSorting, setCostSorting] = React.useState(costSelect[0]);

	return (
		<div className={styles.catalogHeader}>
			<SearchInput
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				placeholder="Total items found: 666"
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
