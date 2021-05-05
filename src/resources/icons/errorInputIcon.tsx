import React from 'react';

interface IEmailIcon {
	width?: string;
	height?: string;
	fill?: string;
}

const ErrorInputIcon = ({
	width = '35px',
	height = '35px',
	fill = '#EE736B',
}) => (
	<svg width={width} height={height} viewBox="0 0 35 35" fill="none">
		<circle cx="17.5" cy="17.5" r="17.5" fill={fill} />
		<path d="M12 12L24 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M24 12L12 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

export default ErrorInputIcon;
