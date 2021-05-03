import React from 'react';
import styles from './styles.scss';

interface ITextarea {
  value: string;
  onChange: (e: string) => void;
  placeholder: string;
  rows: number | string;
}

const Textarea = ({
	value,
	onChange,
	placeholder,
	rows,
}: ITextarea) => (
	<textarea
		value={value}
		className={styles.textarea}
		onChange={(e) => onChange(e.target.value)}
		placeholder={placeholder}
		rows={+rows}
	/>
);

export default Textarea;
