import React from 'react';
import ArrowIcon from 'resources/icons/arrowIcon';
import styles from './styles.scss';

interface INumberInput {
	value: number | string;
	setValue: (value: number | string) => void;
	placeholder?: string;
}

const NumberInput = ({
	value,
	setValue,
	placeholder = '',
}: INumberInput) => {
	const setInputValue = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
		if ('-.+'.includes(e.key)) e.preventDefault();
	}, [value]);

	const increment = React.useCallback(() => setValue(+value + 1), [value]);
	const decrement = React.useCallback(() => value !== 0 && setValue(+value - 1), [value]);

	return (
		<div className={styles.numberInput}>
			<input
				placeholder={placeholder}
				type="number"
				value={value}
				min={0}
				onKeyDown={setInputValue}
				onChange={(e) => {
					if (e.target.value.match(/^(0|[1-9]\d*)$|^$/)) {
						setValue(e.target.value);
					}
				}}
			/>

			<div className={styles.numberInput__actions}>
				<button onClick={increment} type="button">
					<ArrowIcon style={{transform: 'rotate(180deg)'}} />
				</button>

				<button onClick={decrement} type="button">
					<ArrowIcon />
				</button>
			</div>
		</div>
	);
};

export default NumberInput;
