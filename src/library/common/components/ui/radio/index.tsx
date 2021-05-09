import React from 'react';
import cn from 'classnames';
import styles from './styles.scss';

interface IRadio {
	text?: string;
	onChange: (value: any) => void;
	isChecked: boolean;
}

const Radio = ({
	text,
	onChange,
	isChecked,
}: IRadio) => (
	<div
		onClick={onChange}
		className={cn(styles.radio, isChecked ? styles.radio__active : '')}
	>
		<div>
			<div />
		</div>

		<p>{text}</p>
	</div>
);

export default Radio;
