import React from 'react';

interface ISelectArrow {
	width?: string;
	height?: string;
	fill?: string;
}

const SelectArrow = ({
	width = '18px',
	height = '11px',
	fill = '#262623',
}: ISelectArrow) => (
	<svg width={width} height={height} viewBox="0 0 18 11" fill="none">
		<path d="M1 1L9 9L17 1" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
	</svg>
);

export default SelectArrow;
