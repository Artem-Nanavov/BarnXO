/* eslint-disable react/require-default-props */
import React from 'react';

interface IHalfArrow {
	width?: string;
	height?: string;
	fill?: string;
	style?: any;
	onClick?: () => void;
}

const HalfArrow = ({
	width = '77px',
	height = '17px',
	fill = '#FCFCFC',
	style = {},
	onClick = () => {},
}: IHalfArrow) => (
	<svg onClick={onClick} style={style} width={width} height={height} viewBox="0 0 77 17" fill="none">
		<path d="M0 1L74.9998 1.00001L59.9998 16" stroke={fill} strokeWidth="1.6" />
	</svg>
);

export default HalfArrow;
