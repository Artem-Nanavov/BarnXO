/* eslint-disable max-len */
import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import ReviewsHeader from 'library/common/components/reviews/components/header';
import React from 'react';
import cn from 'classnames';
import globalStyles from 'resources/styles/globalStyles.scss';
import image57 from 'resources/images/image57.png';
import Ellipse20 from 'resources/images/Ellipse20.png';
import Review from 'library/common/components/reviews/components/review';
import Button from 'library/common/components/ui/button';
import styles from './styles.scss';

const ReviewsPage = () => (
	<>
		<Header />

		<nav className={globalStyles.container}>
			<div className={cn(globalStyles.wrap, styles.reviews)}>
				<div style={{maxWidth: '1067px'}} className={globalStyles.title}>
					<h1>Our Customers Love Our Reclaimed Wood Furniture!</h1>

					<div />
				</div>

				<img src={image57} alt="" />

				<div style={{maxWidth: '496px', marginTop: '110px'}} className={globalStyles.title}>
					<h1>What our customers say</h1>

					<div />
				</div>

				<div className={styles.reviews__reviews}>
					<ReviewsHeader
						currentValue={0}
						maxValues={1}
						nextPageHandler={() => {}}
						prevPageHandler={() => {}}
					/>

					<div className={styles.reviews__grid}>
						<Review
							username="Beverly R."
							date="June 6, 2019"
							img={Ellipse20}
							description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
						/>

						<Review
							username="Beverly R."
							date="June 6, 2019"
							img={Ellipse20}
							description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
						/>

						<Review
							username="Beverly R."
							date="June 6, 2019"
							img={Ellipse20}
							description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
						/>

						<Review
							username="Beverly R."
							date="June 6, 2019"
							img={Ellipse20}
							description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
						/>

						<Review
							username="Beverly R."
							date="June 6, 2019"
							img={Ellipse20}
							description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
						/>

						<Review
							username="Beverly R."
							date="June 6, 2019"
							img={Ellipse20}
							description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
						/>

						<Review
							username="Beverly R."
							date="June 6, 2019"
							img={Ellipse20}
							description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
						/>

						<Review
							username="Beverly R."
							date="June 6, 2019"
							img={Ellipse20}
							description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
						/>

						<Review
							username="Beverly R."
							date="June 6, 2019"
							img={Ellipse20}
							description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
						/>

						<Review
							username="Beverly R."
							date="June 6, 2019"
							img={Ellipse20}
							description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
						/>

						<Review
							username="Beverly R."
							date="June 6, 2019"
							img={Ellipse20}
							description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
						/>

						<Review
							username="Beverly R."
							date="June 6, 2019"
							img={Ellipse20}
							description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
						/>

						<Review
							username="Beverly R."
							date="June 6, 2019"
							img={Ellipse20}
							description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
						/>

						<Review
							username="Beverly R."
							date="June 6, 2019"
							img={Ellipse20}
							description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
						/>

						<Review
							username="Beverly R."
							date="June 6, 2019"
							img={Ellipse20}
							description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
						/>

						<Review
							username="Beverly R."
							date="June 6, 2019"
							img={Ellipse20}
							description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
						/>
					</div>
				</div>

				<div className={styles.reviews__btns}>
					<Button
						onClick={() => {}}
						text="Load more"
					/>
				</div>
			</div>
		</nav>

		<Footer />
	</>
);

export default ReviewsPage;
