import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './styles.scss';

interface IPaginate {
	pageCount: number;
}

const Paginate = ({
	pageCount,
}: IPaginate) => {
	const handlePageClick = (data: any) => {
		console.log('data', data);
	};

	return (
		<div>
			<ReactPaginate
				previousLabel="Previous"
				nextLabel="Next"
				breakLabel="..."
				breakClassName={styles.pagination__breakMe}
				pageCount={pageCount}
				marginPagesDisplayed={0}
				pageRangeDisplayed={6}
				onPageChange={handlePageClick}
				containerClassName={styles.pagination}
				pageClassName={styles.pagination__page}
				activeClassName={styles.pagination__page_active}
				previousClassName={styles.pagination__previous}
				nextClassName={styles.pagination__next}
			/>
		</div>
	);
};

export default Paginate;
