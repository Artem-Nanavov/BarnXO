import React from 'react';
import ArrowCheckbox from 'resources/icons/arrowCheckbox';
import cn from 'classnames';
import styles from './styles.scss';

interface ICheckbox {
	text: string;
	onChange: (checked: boolean) => void;
	checked: boolean;
}

const Checkbox = ({
	text,
	checked,
	onChange,
}: ICheckbox) => (
	<div
		onClick={() => onChange(!checked)}
		className={cn(styles.checkbox, {[styles.checkbox__checked]: checked})}
	>
		<div>
			<ArrowCheckbox />
		</div>

		<p>{text}</p>
	</div>
);

export default Checkbox;
