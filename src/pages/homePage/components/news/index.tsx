/* eslint-disable max-len */
import React from 'react';
import Rectangle25 from 'resources/images/Rectangle25.png';
import Rectangle139 from 'resources/images/Rectangle139.png';
import Article from './components/article';
import styles from './styles.scss';

const News = () => (
	<div className={styles.news}>
		<div className={styles.carousel}>
			<div className={styles.carousel__content}>
				<Article
					order={0}
					img={Rectangle139}
					title="Environmentally Friendly Furniture"
					subTitle="At BARN XO we have always believed in not just creating good products but also doing good in the process. This is why, at the core of our business, the focus remains on creating environmentally friendly furniture through all aspects of the production process. From wood sourcing, to efficient manufacturing practices, to using the most environmentally friendly finishes and materials; we continue to work diligently to do our part to lower the effects of deforestation."
				/>

				<Article
					img={Rectangle25}
					title="NEW NAme sqft Showroom NOW OPEN!"
					subTitle="Recently expanding into a 12,000 square-foot woodshop with a must-see, on-site showroom, we plan to continue providing the highest quality and exceptional service to all our customers while personally working with each one of them to furnish their space with beautiful, custom pieces that will last a lifetime or can be subsequently re-recycled to protect the integrity of our planet."
				/>
			</div>

			<div className={styles.carousel__counter}>
				<p>01</p>

				<div>
					<div style={{left: '0px'}} />
				</div>

				<p>03</p>
			</div>
		</div>
	</div>
);

export default News;
