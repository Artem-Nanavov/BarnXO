import React from 'react';

interface IShare {
	width?: string;
	height?: string;
	fill?: string;
}

const Share = ({
	width = '32px',
	height = '36px',
	fill = '#262623',
}: IShare) => (
	<svg width={width} height={height} viewBox="0 0 32 36" fill="none">
		<circle cx="25.8735" cy="6.72478" r="5.12737" stroke={fill} strokeWidth="2" />
		<circle cx="25.8735" cy="29.8726" r="5.12737" stroke={fill} strokeWidth="2" />
		<circle cx="6.12737" cy="18.2988" r="5.12737" stroke={fill} strokeWidth="2" />
		<path d="M10.8906 15.5755L21.1029 9.44812" stroke={fill} strokeWidth="2" />
		<path d="M10.8906 21.022L21.1029 27.1494" stroke={fill} strokeWidth="2" />
	</svg>
);

export default Share;
