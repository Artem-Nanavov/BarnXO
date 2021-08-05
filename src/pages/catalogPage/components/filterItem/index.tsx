import React, { useState, useCallback } from 'react';
import parse from 'html-react-parser';
import ArrowIcon from 'resources/icons/arrowIcon';
import serverFetch from 'library/utils/server';
import styles from './styles.scss';
import Checkbox from 'library/common/components/ui/checkbox';

interface IFilterItem {
	filterId: number;
	title: string;
}

const FilterItem = ({
	filterId,
	title,
	setSubFilters,
	...props
}: any) => {
	const [isOpen, setIsOpen] = useState(false);

	const getFilters = useCallback(
		() => {
			if (!isOpen && !props.sub_categories) {
				serverFetch.get(`/categories/${filterId}`).then((data) => setSubFilters(data.data.data.sub_categories, filterId));
			}
			setIsOpen(!isOpen);
		},
		[filterId],
	)

	return (
		<div className={styles.filters__block}>
			<div className={styles.filters__block_header} onClick={getFilters}>
				<p>{parse(title)}</p>

				<ArrowIcon style={{ transform: `rotate(${isOpen ? 0 : 180}deg)` }} />
			</div>

			<ul className={styles.filters__block_list}>
				{
					props.sub_categories && props.sub_categories.map((child: any) => (
						<li
							key={child.childName}
							// onClick={() => setFilter(
							// 	child.parent,
							// 	child.childName,
							// 	!filterState[child.parent][child.childName].isSelected,
							// )}
						>
							<Checkbox
								onChange={() => { }}
								text={child.name}
								checked={child.isSelected}
							/>
						</li>
					))
				}

				{
					Array.isArray(props.sub_categories) && props.sub_categories.length === 0 && <p>Item doesn't have filters</p>
				}
			</ul>
		</div>
	);
}

export default FilterItem;
