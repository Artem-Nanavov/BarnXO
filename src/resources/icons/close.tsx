import React from 'react';

interface IClose {
	width?: string;
	height?: string;
	fill?: string;
}

const Close = ({
	width = '24px',
	height = '42px',
	fill = '#262623',
}: IClose) => (
	<svg width={width} height={height} viewBox="0 0 24 24" fill="none">
		<path d="M16.125 7.875L7.875 16.125" stroke={fill} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M16.125 16.125L7.875 7.875" stroke={fill} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
	</svg>

);

export default Close;
