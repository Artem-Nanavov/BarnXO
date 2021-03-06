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
	setValue: (value: ISelectValue) => void;
}

const CatalogSelect = ({
	placeholder = '',
	value,
	values,
	setValue,
}: ISelect) => {
	const [showSelect, setShowSelect] = React.useState(false);
	const selectRef = React.useRef(null);

	useClickOutside(selectRef, () => setShowSelect(false));

	const setSelectValue = (_value: ISelectValue) => {
		setValue(_value);
		setShowSelect(false);
	};

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
							onClick={() => setSelectValue(_value)}
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

export default CatalogSelect;
