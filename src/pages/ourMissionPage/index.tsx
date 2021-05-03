/* eslint-disable max-len */
import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import React from 'react';
import globalStyles from 'resources/styles/globalStyles.scss';
import ourMissionImg from 'resources/images/ourMissionImg.png';
import styles from './styles.scss';

const OurMissionPage = () => (
	<div>
		<Header />

		<nav className={styles.ourMission}>
			<div className={styles.ourMission__content}>
				<div style={{maxWidth: '1041px'}} className={globalStyles.title}>
					<h1>THe history of BARN XO | Reclaimed wood furniture</h1>

					<div />
				</div>

				<img src={ourMissionImg} alt="" />

				<h2>Our mission</h2>

				<p>
					To create beautifully timeless furniture using sustainable practices with reused, repurposed, or reclaimed materials.
					At BARN XO we have always believed in not just creating good products but also doing good in the process. This is why, at the core of our business, the focus remains on creating environmentally friendly furniture through all aspects of the production process. From wood sourcing, to efficient manufacturing practices, to using the most environmentally friendly finishes and materials; we continue to work diligently to do our part to lower the effects of deforestation.
					With the environment being our core focus we hope to be able to grow a business that helps to make a small change in the carbon foot print, stimulated economic growth in our community, and ultimately help to inspire others to do the same.
				</p>

				<h2>Responsibly, On Trend</h2>

				<p>
					Focusing on the environment doesn&apos;t mean style and the current trends simply go out the window. At BARN XO we create furniture that is not only on trend, but also timeless to ensure that piece will last a lifetime in both quality and style. We regularly work with interior designers which gives us an insight into what's hot now, and where the trends are going moving forward. This allows us to refine our offerings to fit what the market demands while staying true to our core focus of creating timeless, environmentally friendly furniture.
				</p>
			</div>
		</nav>

		<Reviews />

		<Footer />
	</div>
);

export default OurMissionPage;
