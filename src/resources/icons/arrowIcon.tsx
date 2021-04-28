/* eslint-disable react/require-default-props */
import React from 'react';

interface IArrowIcon {
	width?: string;
	height?: string;
	fill?: string;
}

const ArrowIcon = ({
	width = '11px',
	height = '7px',
	fill = '#262623',
}: IArrowIcon) => (
	<svg width={width} height={height} viewBox="0 0 11 7" fill="none">
		<path d="M5.5 4.45487L9.77797 0L11 1.27256L5.5 7L0 1.27256L1.22203 0L5.5 4.45487Z" fill={fill} />
	</svg>
);

export default ArrowIcon;
