/* eslint-disable max-len */
import React from 'react';

interface ILibra {
	width?: string;
	height?: string;
	fill?: string;
}

const Libra = ({
	width = '49px',
	height = '36px',
	fill = '#262623',
}: ILibra) => (
	<svg width={width} height={height} viewBox="0 0 49 36" fill="none">
		<path d="M1.5 5H19.686M47.5 5H29.4477" stroke={fill} strokeWidth="2" strokeLinecap="round" />
		<circle cx="24.6095" cy="5.42195" r="4.42195" stroke={fill} strokeWidth="2" />
		<path d="M30.4961 28L39.062 7L47.4961 28H30.4961Z" stroke={fill} strokeWidth="2" />
		<path d="M39 36C44.4112 36 49 32.8168 49 29H29C29 32.8168 33.5888 36 39 36Z" fill={fill} />
		<path d="M1.5 28L10.0659 7L18.5 28H1.5Z" stroke={fill} strokeWidth="2" />
		<path d="M10 36C15.4112 36 20 32.8168 20 29H0C0 32.8168 4.58878 36 10 36Z" fill={fill} />
	</svg>
);

export default Libra;
