import useClickOutside from 'library/common/customHooks/IUseClickOutside';
import React from 'react';
import cn from 'classnames';
import SelectArrow from 'resources/icons/selectArrow';
import styles from './styles.scss';

interface ISelectValue {
	key: string;
	value: string;
}

interface ISelect {
	placeholder?: string;
	value?: ISelectValue;
	values: ISelectValue[];
	onClick: (value: ISelectValue) => void;
}

const Select = ({
	placeholder,
	value,
	values,
	onClick,
}: ISelect) => {
	const [showSelect, setShowSelect] = React.useState(false);
	const selectRef = React.useRef(null);

	const selectValueHandler = (_value: ISelectValue) => {
		onClick(_value);
		setShowSelect(false);
	};

	useClickOutside(selectRef, () => setShowSelect(false));

	return (
		<div ref={selectRef} className={cn(styles.select, showSelect ? styles.select__show : '')}>
			<div
				onClick={() => setShowSelect(true)}
				className={styles.select__header}
			>
				<p className={styles.select__value}>
					{value ? value.value : placeholder}
				</p>

				<SelectArrow />
			</div>

			<ul
				className={styles.select__values}
			>
				{
					values.map((_value) => (
						<li
							onClick={() => selectValueHandler(_value)}
							className={styles.select__item}
							key={_value.key}
						>
							<p>{_value.value}</p>
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default Select;
