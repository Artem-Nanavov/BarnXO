/* eslint-disable max-len */
import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import ReviewsHeader from 'library/common/components/reviews/components/header';
import React from 'react';
import Slider from 'react-slick';
import cn from 'classnames';
import globalStyles from 'resources/styles/globalStyles.scss';
import image57 from 'resources/images/image57.png';
import Ellipse20 from 'resources/images/Ellipse20.png';
import Review from 'library/common/components/reviews/components/review';
import Button from 'library/common/components/ui/button';
import styles from './styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReviewsPage = () => {
	const settings = {
		className: styles.reviews__grid,
		centerMode: false,
		infinite: false,
		centerPadding: '60px',
		slidesToShow: 4,
		speed: 500,
		rows: 4,
		slidesToScroll: 4,
		// slidesPerRow: 4,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 830,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const [slider, setSlider] = React.useState<null | Slider>(null);
	const [page, setPage] = React.useState(0);

	const maxValues = React.useMemo(() => Math.ceil(80 / 16), []);

	const nextSlideHandler = () => {
		if (page < maxValues) {
			setPage(page + 1);
		}

		if (slider) {
			slider.slickNext();
		}
	};

	const preSlideHandler = () => {
		if (page > 0) {
			setPage(page - 1);
		}

		if (slider) {
			slider.slickPrev();
		}
	};

	return (
		<>
			<Header />

			<nav className={globalStyles.container}>
				<div className={cn(globalStyles.wrap, styles.reviews)}>
					<div style={{ maxWidth: '1067px' }} className={globalStyles.title}>
						<h1>Our Customers Love Our Reclaimed Wood Furniture!</h1>

						<div />
					</div>

					<img src={image57} alt="" />

					<div style={{ maxWidth: '496px', marginTop: '110px' }} className={globalStyles.title}>
						<h1>What our customers say</h1>

						<div />
					</div>

					<div className={styles.reviews__reviews}>
						<ReviewsHeader
							currentValue={page}
							maxValues={maxValues}
							nextPageHandler={nextSlideHandler}
							prevPageHandler={preSlideHandler}
						/>

						<Slider ref={(c) => setSlider(c)} {...settings}>
							{
								Array.from({ length: 80 }).map(() => (
									<Review
										mt
										w100
										key={Math.random()}
										username="Beverly R."
										date="June 6, 2019"
										img={Ellipse20}
										description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
									/>
								))
							}
						</Slider>
					</div>

					<div className={styles.reviews__btns}>
						<Button
							onClick={() => { }}
							text="Load more"
						/>
					</div>
				</div>
			</nav>

			<Footer />
		</>
	);
};

export default ReviewsPage;
