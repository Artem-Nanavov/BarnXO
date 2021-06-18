import React from 'react';

interface ILikeIcon {
	width?: string;
	height?: string;
	fill?: string;
}

const LikeIcon = ({
	width = '18px',
	height = '17px',
	fill = 'white',
}: ILikeIcon) => (
	<svg width={width} height={height} viewBox="0 0 18 17" fill="none">
		<path
			// eslint-disable-next-line max-len
			d="M16.6881 9.15052L16.699 9.16246L9 17L1.30103 9.16246L1.31192 9.15052C0.417861 8.08944 -0.049273 6.72361 0.00412035 5.32673C0.0575137 3.92984 0.62749 2.60509 1.59983 1.61794C2.57218 0.630791 3.87505 0.0541713 5.24739 0.00362698C6.61972 -0.0469174 7.96012 0.432347 9 1.34538C10.0399 0.432347 11.3803 -0.0469174 12.7526 0.00362698C14.1249 0.0541713 15.4278 0.630791 16.4002 1.61794C17.3725 2.60509 17.9425 3.92984 17.9959 5.32673C18.0493 6.72361 17.5821 8.08944 16.6881 9.15052Z"
			fill={fill}
		/>
	</svg>

);

export default LikeIcon;
