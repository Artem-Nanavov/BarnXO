import React from 'react';

interface IArrowIcon {
	width?: string;
	height?: string;
	fill?: string;
}

const ArrowCheckbox = ({
	width = '13px',
	height = '10px',
	fill = 'white',
}) => (
	<svg width={width} height={height} viewBox="0 0 13 10" fill="none">
		<path
			d="M11.5 1.50024L4.5 8.49993L1 5.00025"
			stroke={fill}
			strokeWidth="1.4"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default ArrowCheckbox;
