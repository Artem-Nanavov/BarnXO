import React from 'react';
import styles from './styles.scss';

interface IInput {
  placeholder?: string;
  value: string;
  onChange: (e: string) => void;
}

const Input = ({
	placeholder,
	value,
	onChange,
}: IInput) => (
	<input
		className={styles.input}
		placeholder={placeholder}
		value={value}
		type="text"
		onChange={(e) => onChange(e.target.value)}
	/>
);

export default Input;
