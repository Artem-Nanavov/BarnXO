import React from 'react';
import CloseIcon from 'resources/icons/close';
import { IChild, IFilters, IParent } from 'types/catalog';
import styles from './styles.scss';
import {initialState as defaultFilters} from '../../reducer';

interface IResetFilters {
	filters: IFilters;
	setFiltersValue: (filters: IFilters) => void;
}

const ResetFilters = ({
	filters,
	setFiltersValue,
}: IResetFilters) => {
	const appliedFilters = [
		...Object.values(filters.home),
		...Object.values(filters.office),
		...Object.values(filters.wood),
		...Object.values(filters.DYI),
	].filter((filter) => filter.isSelected === true);

	const deleteFilter = React.useCallback((parent: IParent, child: IChild, value: boolean) => {
		setFiltersValue({
			...filters,
			[parent]: {
				...filters[parent],
				[child]: {
					...filters[parent][child],
					isSelected: value,
				},
			},
		});
	}, [filters]);

	const deleteAllFilters = React.useCallback(() => {
		setFiltersValue({
			...filters,
			home: defaultFilters.filters.home,
			office: defaultFilters.filters.office,
			wood: defaultFilters.filters.wood,
			DYI: defaultFilters.filters.DYI,
		});
	}, []);

	return (
		<div className={styles.resetFilters}>
			<div className={styles.resetFilters__filters}>
				{
					appliedFilters.map((filter) => (
						<div key={Math.random()} className={styles.resetFilters__item}>
							<p>{filter.text}</p>

							<button
								onClick={() => deleteFilter(filter.parent, filter.childName, false)}
								type="button"
							>
								<CloseIcon />
							</button>
						</div>
					))
				}
			</div>

			{
				appliedFilters.length > 0 && (
					<button
						className={styles.resetFilters__resetAll}
						type="button"
						onClick={deleteAllFilters}
					>
						Reset filter
					</button>
				)
			}
		</div>
	);
};

export default ResetFilters;
