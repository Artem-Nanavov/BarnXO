import React from 'react';
import cn from 'classnames';
import ErrorInputIcon from 'resources/icons/errorInputIcon';
import styles from './styles.scss';

interface IFormInput {
	type?: 'text' | 'password';
	value: string;
	onChange: (value: string) => void;
	placeholder: string;
	isError: boolean;
	style?: React.CSSProperties;
}
// ErrorInputIcon
const FormInput = ({
	type = 'text',
	value,
	onChange,
	placeholder,
	isError,
	style = {},
}: IFormInput) => (
	<div style={style} className={cn(styles.formInput, {[styles.formInput__error]: isError})}>
		<input
			placeholder={placeholder}
			onChange={(e) => onChange(e.target.value)}
			value={value}
			type={type}
		/>

		<ErrorInputIcon />
	</div>
);

export default FormInput;
