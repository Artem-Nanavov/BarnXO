/* eslint-disable max-len */
import React from 'react';
import Ellipse20 from 'resources/images/Ellipse20.png';
import Header from './components/header';
import Review from './components/review';
import styles from './styles.scss';

const Reviews = () => (
	<div className={styles.wrap}>
		<div>
			<Header />

			<div className={styles.review}>
				<Review
					username="Beverly R."
					date="June 6, 2019"
					value={5}
					img={Ellipse20}
					description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
				/>

				<Review
					username="Beverly R."
					date="June 6, 2019"
					value={5}
					img={Ellipse20}
					description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
				/>

				<Review
					username="Beverly R."
					date="June 6, 2019"
					value={5}
					img={Ellipse20}
					description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
				/>

				<Review
					username="Beverly R."
					date="June 6, 2019"
					value={5}
					img={Ellipse20}
					description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
				/>
			</div>
		</div>
	</div>
);

export default Reviews;
