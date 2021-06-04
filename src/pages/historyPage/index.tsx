/* eslint-disable max-len */
import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import React from 'react';
import imgForHistory from 'resources/images/imgForHistory.png';
import globalStyles from 'resources/styles/globalStyles.scss';
import styles from './styles.scss';

const HistoryPage = () => (
	<>
		<Header />

		<nav className={styles.history}>
			<div className={styles.history__content}>
				<div style={{maxWidth: '1041px'}} className={globalStyles.title}>
					<h1>THe history of BARN XO | Reclaimed wood furniture</h1>

					<div />
				</div>

				<div className={styles.history__text}>
					<div>
						<p>BARN XO is a family-owned furniture manufacturer that was humbly born out of our home garage in the Chicagoland area. It all started in 2013 as a fun project between to brothers who wanted to surprise their mother with a dining room table.</p>

						<p>Not before long, it became our family’s passion to continue building beautifully timeless, eco-friendly furniture that others could showcase in their own homes. Being committed to the concept of sustainability and the future of planet Earth, our family was inspired to make furniture pieces exclusively out of reclaimed materials from barns all over the Midwest.</p>

						<p>In just the past five years, our company has produced countless of hand-made and unique, made-to-order pieces for hundreds of homes, offices, and restaurants all over the United States. Thanks to our satisfied customers, we have been able to quickly grow from a two-person project to an 11-person company, with several skilled craftsmen, and have salvaged millions of century-old board feet that would have otherwise ended up in a landfill. </p>
					</div>

					<img src={imgForHistory} alt="" />
				</div>
			</div>
		</nav>

		<Reviews />

		<Footer />
	</>
);

export default HistoryPage;
