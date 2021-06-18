import Checkbox from 'library/common/components/ui/checkbox';
import React from 'react';
import ArrowIcon from 'resources/icons/arrowIcon';
import Slider from 'rc-slider';
import { IChild, IFilters, IParent } from 'types/catalog';
import cn from 'classnames';
import Input from 'pages/customPage/components/input';
import 'rc-slider/assets/index.css';
import styles from './styles.scss';

const { Range } = Slider;

interface IFiltersComponent {
	filters: IFilters;
	minCost: number;
	maxCost: number;
	setFiltersValue: (filters: IFilters) => void;
}

const Filters = ({
	filters,
	maxCost,
	minCost,
	setFiltersValue,
}: IFiltersComponent) => {
	// const [isShowHome, setIsShowHome] = React.useState(true);
	// const [isShowOffice, setIsShowOffice] = React.useState(true);
	// const [isShowWood, setIsShowWood] = React.useState(true);
	// const [isShowDYI, setIsShowDYI] = React.useState(true);
	const [cost, setCost] = React.useState([minCost, maxCost]);
	const [minValueOfCost, setMinValueOfCost] = React.useState('0');

	const [filterState, setFilterState] = React.useState(filters);

	const setFilter = React.useCallback((parent: IParent, child: IChild, value: boolean) => {
		setFilterState({
			...filterState,
			[parent]: {
				...filterState[parent],
				[child]: {
					...filterState[parent][child],
					isSelected: value,
				},
			},
		});
	}, [filterState]);

	React.useEffect(() => {
		setFiltersValue(filterState);
	}, [filterState]);

	const setMinCostFromInput = (value: string | number) => {
		if (value.toString().match(/^(0|[1-9]\d*)$|^$/) && value >= 0) {
			setCost([+value, cost[1]]);
		}

		if (value.toString().match(/^(0|[1-9]\d*)$|^$/)) {
			setMinValueOfCost(value.toString());
		}
	};

	const onMinBlurHandler = () => {
		if (minValueOfCost.trim() === '') {
			setMinValueOfCost('0');
		}
	};

	const setMaxCostFromInput = (value: string | number) => {
		if (value.toString().match(/^(0|[1-9]\d*)$|^$/)) {
			setCost([cost[0], +value]);
		}
	};

	const rangeHandler = (value: number[]) => {
		setCost(value);
		setMinValueOfCost(value[0].toString());
	};

	return (
		<article className={styles.filters}>
			<div className={styles.filters__block}>
				<div className={styles.filters__block_header}>
					<p>Home Furniture</p>

					<ArrowIcon />
				</div>

				<ul className={styles.filters__block_list}>
					{
						Object.values(filterState.home).map((child) => (
							<li
								key={child.childName}
								onClick={() => setFilter(
									child.parent,
									child.childName,
									!filterState[child.parent][child.childName].isSelected,
								)}
							>
								<Checkbox
									onChange={() => { }}
									text={child.text}
									checked={child.isSelected}
								/>
							</li>
						))
					}
				</ul>
			</div>

			<div className={styles.filters__block}>
				<div className={styles.filters__block_header}>
					<p>Office Furniture</p>

					<ArrowIcon />
				</div>

				<ul className={styles.filters__block_list}>
					{
						Object.values(filterState.office).map((child) => (
							<li
								key={child.childName}
								onClick={() => setFilter(
									child.parent,
									child.childName,
									!filterState[child.parent][child.childName].isSelected,
								)}
							>
								<Checkbox
									onChange={() => { }}
									text={child.text}
									checked={child.isSelected}
								/>
							</li>
						))
					}
				</ul>
			</div>

			<div className={styles.filters__block}>
				<div className={styles.filters__block_header}>
					<p>Wood, Metal Seating</p>

					<ArrowIcon />
				</div>

				<ul className={styles.filters__block_list}>
					{
						Object.values(filterState.wood).map((child) => (
							<li
								key={child.childName}
								onClick={() => setFilter(
									child.parent,
									child.childName,
									!filterState[child.parent][child.childName].isSelected,
								)}
							>
								<Checkbox
									onChange={() => { }}
									text={child.text}
									checked={child.isSelected}
								/>
							</li>
						))
					}
				</ul>
			</div>

			<div className={styles.filters__block}>
				<div className={styles.filters__block_header}>
					<p>DYI/Wholesale</p>

					<ArrowIcon />
				</div>

				<ul className={styles.filters__block_list}>
					{
						Object.values(filterState.DYI).map((child) => (
							<li
								key={child.childName}
								onClick={() => setFilter(
									child.parent,
									child.childName,
									!filterState[child.parent][child.childName].isSelected,
								)}
							>
								<Checkbox
									onChange={() => { }}
									text={child.text}
									checked={child.isSelected}
								/>
							</li>
						))
					}
				</ul>
			</div>

			<div className={cn(styles.filters__block, styles.grid)} style={{ paddingRight: 30 }}>
				<div className={styles.filters__block_header}>
					<p>Cost</p>

					<ArrowIcon />
				</div>

				<div className={styles.filters__costInput}>
					<Input
						placeholder="Min"
						value={minValueOfCost}
						onChange={setMinCostFromInput}
						onBlur={onMinBlurHandler}
					/>

					<Input
						placeholder="Max"
						value={cost[1].toString()}
						onChange={setMaxCostFromInput}
					/>
				</div>

				<Range
					allowCross
					min={minCost}
					max={maxCost}
					value={cost}
					onChange={rangeHandler}
				/>
			</div>
		</article>
	);
};

export default Filters;
