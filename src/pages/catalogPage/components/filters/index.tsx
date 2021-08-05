import Checkbox from 'library/common/components/ui/checkbox';
import React, {useCallback} from 'react';
import ArrowIcon from 'resources/icons/arrowIcon';
import Slider from 'rc-slider';
import { IChild, IFilters, IParent } from 'types/catalog';
import cn from 'classnames';
import Input from 'pages/customPage/components/input';
import 'rc-slider/assets/index.css';
import styles from './styles.scss';
import FilterItem from '../filterItem';
import Button from 'library/common/components/ui/button';

const { Range } = Slider;

interface IFiltersComponent {
	filters: IFilters;
	minCost: number;
	maxCost: number;
	setFiltersValue: (filters: IFilters) => void;
	setSubFilters: (item: any) => void;
}

const Filters = ({
	filters,
	maxCost,
	minCost,
	setFiltersValue,
	setSubFilters,
}: any) => {
	// const [isShowHome, setIsShowHome] = React.useState(true);
	// const [isShowOffice, setIsShowOffice] = React.useState(true);
	// const [isShowWood, setIsShowWood] = React.useState(true);
	// const [isShowDYI, setIsShowDYI] = React.useState(true);
	const [cost, setCost] = React.useState([minCost, maxCost]);
	const [minValueOfCost, setMinValueOfCost] = React.useState('0');

	const [filterState, setFilterState] = React.useState(filters);

	// console.log('filters', filters);
	// console.log('filterState', filterState);

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

	// React.useEffect(() => {
	// 	setFiltersValue(filterState);
	// }, [filterState]);

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

	const submit = useCallback(
		() => {
			console.log('submit')
		},
		[],
	)

	return (
		<article className={styles.filters}>
			{
				filters.map((f: any) => (
					<FilterItem {...f} filterId={f.category_id} title={f.name} setSubFilters={setSubFilters} />
				))
			}

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

				{/* <Range
					allowCross
					min={minCost}
					max={maxCost}
					value={cost}
					onChange={rangeHandler}
				/> */}
			</div>

			<div className={styles.filters__block}>
				<Button text="Submit" onClick={submit}  />
			</div>
		</article>
	);
};

export default Filters;
