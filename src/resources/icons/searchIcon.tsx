/* eslint-disable react/require-default-props */
import React from 'react';

interface ISearchIcon {
	width?: string;
	height?: string;
	fill?: string;
}

const SearchIcon = ({
	width = '21px',
	height = '21px',
	fill = '#A1A1A1',
}: ISearchIcon) => (
	<svg width={width} height={height} viewBox="0 0 22 22" fill="none">
		<path
			// eslint-disable-next-line max-len
			d="M0.500058 8.77746C0.508481 10.997 1.38055 13.087 2.95578 14.6624C5.05656 16.7633 8.13768 17.5986 10.9966 16.8423C12.0756 16.5569 13.0844 16.0518 13.9607 15.3651L20.0953 21.5L21.5 20.095L15.3653 13.9599C16.5073 12.5069 17.1251 10.7225 17.118 8.83881C17.1095 6.61926 16.2374 4.52928 14.6623 2.95389C12.5616 0.853096 9.48049 0.0177765 6.62159 0.774071C5.22175 1.14438 3.93896 1.88316 2.91173 2.91052C1.34823 4.47421 0.491898 6.55782 0.500058 8.77746ZM7.14491 2.7024C9.31863 2.12738 11.6609 2.76214 13.2576 4.35898C14.4549 5.55625 15.1177 7.14473 15.124 8.8316C15.1304 10.5185 14.4795 12.1021 13.2912 13.2904C12.5102 14.0715 11.5359 14.6329 10.4733 14.914C8.29972 15.489 5.95737 14.8542 4.36064 13.2573C3.16343 12.0601 2.50067 10.4718 2.49438 8.78485C2.48804 7.09789 3.13885 5.51437 4.32709 4.32593C5.1081 3.5449 6.08237 2.98349 7.14491 2.7024Z"
			fill={fill}
		/>
	</svg>
);

export default SearchIcon;
