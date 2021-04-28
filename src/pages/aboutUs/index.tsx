/* eslint-disable max-len */
import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import React from 'react';
import aboutUsHome from 'resources/images/aboutUs.png';
import aboutUsSmall from 'resources/images/aboutUsSmall.png';
import globalStyles from 'resources/styles/globalStyles.scss';
import styles from './styles.scss';

const AboutUsPage = () => (
	<div>
		<Header />

		<div className={styles.aboutUs}>
			<div className={styles.aboutUs__content}>
				<div style={{maxWidth: '864px'}} className={globalStyles.title}>
					<h1>About BARN XO | Reclaimed wood furniture</h1>

					<div />
				</div>

				<img className={styles.aboutUs__mainImg} src={aboutUsHome} alt="" />

				<div style={{marginTop: '70px'}} className={styles.aboutUs__text}>
					<p>
						At BARN XO, we design and craft high quality furniture from premium reclaimed wood that is salvaged from aged buildings and barns. Our family business has been helping our customers
						implement beautiful furniture in homes and businesses since 2013.
					</p>

					<p>
						The reclaimed wood and recycled materials yield an environment-focus on our product that incorporates a special meaning from the time of creation through
						long-living use of it in your space.
					</p>

					<p>
						All our furniture selection and custom orders are hand made by our team of skilled and passionate craftsmen. Our ability to create custom orders allows us to provide a product for almost
						any home or business.
					</p>
				</div>

				<div className={styles.aboutUs__blockTwo}>
					<div style={{height: '410px'}} className={styles.aboutUs__text}>
						<h2>New 2,500 Sqft Showroom Now Open!</h2>

						<p>Recently we expanding into a 12,000 square-foot woodshop with a must-see, on-site showroom, we plan to continue providing the highest quality/exceptional service to all our customers and personally working with each one of them to furnish their space with beautiful, custom pieces that will last a lifetime or can be subsequently re-recycled to protect the integrity of our planet.</p>

						<p>Customer satisfaction is always our priority. Orders are created and shipped nationwide to you within 4-6 weeks.</p>

						<p>To schedule a private tour please contact us today at info@barnxo.com or (847) 514-4276.</p>
					</div>

					<img src={aboutUsSmall} alt="" />
				</div>
			</div>
		</div>

		<Reviews />

		<Footer />
	</div>
);

export default AboutUsPage;
