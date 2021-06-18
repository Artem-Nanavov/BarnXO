/* eslint-disable max-len */
import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import React from 'react';
import cn from 'classnames';
import globalStyles from 'resources/styles/globalStyles.scss';
import image85 from 'resources/images/image85.png';
import image87 from 'resources/images/image87.png';
// @ts-ignore
import StarRatings from 'react-star-ratings';
import Tag from 'library/common/components/tag';
import Carousel from './components/carousel';
import styles from './styles.scss';
import Form from './components/form';

const imgs = [image85, image87, image87];

interface IProduct {
	rating: string | number;
	title: string;
	// description?: string;
	tags: string[];
	price: string | number;
}

const ProductPage = ({
	rating,
	title,
	// description,
	tags,
	price,
}: IProduct) => {
	console.log();

	return (
		<>
			<Header />

			<nav className={globalStyles.container}>
				<div className={cn(globalStyles.wrap, styles.product)}>
					<div>
						<Carousel
							imgs={imgs}
							_currentImg={image85}
						/>
					</div>

					<div className={styles.product__info}>
						<h1>{title}</h1>

						<div className={styles.product__subTitle}>
							<div className={styles.product__rating}>
								<StarRatings
									rating={rating}
									starRatedColor="#262623"
									name="rating"
									starDimension="20px"
								/>

								<p>{rating}</p>
							</div>

							<p>Write a review</p>
						</div>

						<Form price={price} />

						<div className={styles.product__description}>
							<h2>description</h2>

							<div className={styles.product__text}>
								<p>Perfect for Hosting a Conference, Business Meeting, or Dining with the Family!</p>
								<p style={{ marginTop: '16px' }}>This is a 42&rdquo; Bar Height Table.</p>
								<p style={{ marginTop: '16px' }}>
									This Bar Height U-Shape Dining Table is HANDMADE in the USA. It&rsquo;s an ideal piece to add a
									<br />
									rustic yet modern touch to your home or office. It&rsquo;s very durable and we&rsquo;ve built it to last. The wood top is reclaimed, old Growth Douglas Fir that was salvaged from a project of ours. The building was over 170 Years old giving the wood beautiful character. It&rsquo;s very satisfying to use reclaimed wood to produce furniture. It&rsquo;s timeless and unique look and its environmental contribution as a recycled green building material makes the end product special.
								</p>
								<p style={{ marginTop: '16px' }}>All of our wood has character and soul making it unique! You will receive the same style piece but note piece might not match the photo identically. Call or email for custom sizes and any additional questions. Phone: 1-847-514-4276 or Email: info@barnxo.com. Custom orders are welcome and encouraged! Send us message for quotes or any additional questions.</p>

								<p>&nbsp;</p>

								<p>Repurposed Wood Rich in Character and History:</p>
								<p style={{ marginTop: '16px' }}>Our reclaimed wood is salvaged from barns around the country. As barns age, their structure becomes compromised but its wood ages beautifully gaining timeless characteristics that make for beautiful furniture. Our wood makes great furniture for your home or business.</p>

								<p>&nbsp;</p>

								<p>Made To Order With High-Quality Standards:</p>
								<p style={{ marginTop: '16px' }}>Each table is made to order with great attention to detail. We take pride in every piece in our shop and we build them as if we were building it for ourselves. We set very high standards before our product is shipped. We want to make sure you are completely satisfied with your selections and we want our products to remain in your family or business for years to come. Thank you for you interest in our shop. We value your business and opinion. We appreciate your support.</p>

								<p>&nbsp;</p>

								<p>Some Assembly Required:</p>
								<p style={{ marginTop: '16px' }}>We pre-drill the holes for all the screws and color code them to correspond with each wooden top. All you need is a screwdriver and a couple of minutes to assembly.</p>
							</div>

							<div className={styles.product__tags}>
								{
									tags.map((tag) => (
										<Tag text={tag} />
									))
								}
							</div>
						</div>
					</div>
				</div>
			</nav>

			<Reviews />

			<Footer />
		</>
	);
};

export default ProductPage;
