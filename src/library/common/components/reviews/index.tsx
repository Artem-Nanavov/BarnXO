/* eslint-disable max-len */
import React from 'react';
import Ellipse20 from 'resources/images/Ellipse20.png';
// @ts-ignore
import Carousel, {slidesToShowPlugin} from '@brainhubeu/react-carousel';
import Header from './components/header';
import Review from './components/review';
import styles from './styles.scss';
import '@brainhubeu/react-carousel/lib/style.css';

const plugins = [
	{
		resolve: slidesToShowPlugin,
		options: {
			numberOfSlides: 4,
		},
	},
];

const breakpoints = {
	1632: {
		plugins: [
			{
				resolve: slidesToShowPlugin,
				options: {
					numberOfSlides: 3,
				},
			},
		],
	},
	1190: {
		plugins: [
			{
				resolve: slidesToShowPlugin,
				options: {
					numberOfSlides: 2,
				},
			},
		],
	},
	780: {
		plugins: [
			{
				resolve: slidesToShowPlugin,
				options: {
					numberOfSlides: 1,
				},
			},
		],
	},
};

const reviews = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

const Reviews = () => {
	const [value, setValue] = React.useState(0);

	const change = (_value: any) => setValue(_value);
	const nextPageHandler = () => {
		if (value !== reviews.length) setValue(value + 1);
	};
	const prevPageHandler = () => {
		if (value > 0) setValue(value - 1);
	};

	return (
		<div className={styles.wrap}>
			<div>
				<Header
					currentValue={value}
					maxValues={reviews.length}
					nextPageHandler={nextPageHandler}
					prevPageHandler={prevPageHandler}
				/>

				<div className={styles.review}>
					<Carousel
						value={value}
						plugins={plugins}
						onChange={change}
						breakpoints={breakpoints}
					>
						{
							reviews.map(() => (
								<Review
									key={Math.random()}
									username="Beverly R."
									date="June 6, 2019"
									img={Ellipse20}
									description="Love the furniture. Barn XP made a beautiful unit that goes under my tv and a matching desk. Gream customer service too. Bv Roos"
								/>
							))
						}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
