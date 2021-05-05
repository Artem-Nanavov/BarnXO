import React from 'react';
import cn from 'classnames';
import styles from './styles.scss';

interface IButton {
  text: string;
  color?: 'primary' | 'secondary' | 'outlined' | 'none';
  size?: 'small' | 'default';
  style?: React.CSSProperties;
  onClick: any;
}

const Button = ({
	text,
	color = 'primary',
	size = 'default',
	style = {},
	onClick,
}: IButton) => (
	<button
		onClick={onClick}
		style={style}
		className={cn(styles.button, styles[color], styles[size])}
		type="button"
	>
		{text}
	</button>
);

export default Button;
