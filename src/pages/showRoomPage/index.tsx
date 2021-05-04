import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import React from 'react';
import globalStyles from 'resources/styles/globalStyles.scss';
import showroom from 'resources/images/showroom.png';
import image61 from 'resources/images/image61.png';
import image62 from 'resources/images/image62.png';
import image63 from 'resources/images/image63.png';

import image64 from 'resources/images/image64.png';
import image65 from 'resources/images/image65.png';
import image66 from 'resources/images/image66.png';

import image67 from 'resources/images/image67.png';
import image68 from 'resources/images/image68.png';
import image69 from 'resources/images/image69.png';

import image70 from 'resources/images/image70.png';
import image71 from 'resources/images/image71.png';
import image72 from 'resources/images/image72.png';

import image73 from 'resources/images/image73.png';
import image74 from 'resources/images/image74.png';
import image75 from 'resources/images/image75.png';

import image76 from 'resources/images/image76.png';
import image77 from 'resources/images/image77.png';
import image78 from 'resources/images/image78.png';

import image79 from 'resources/images/image79.png';
import image80 from 'resources/images/image80.png';
import image81 from 'resources/images/image81.png';

import image82 from 'resources/images/image82.png';
import image83 from 'resources/images/image83.png';
import image84 from 'resources/images/image84.png';
import styles from './styles.scss';

const Showroom = () => (
	<>
		<Header />

		<nav style={{marginTop: '60px'}} className={globalStyles.container}>
			<div className={globalStyles.wrap}>
				<div style={{maxWidth: '715px'}} className={globalStyles.title}>
					<h1>NEW 1200 sqft Showroom NOW OPEN!</h1>

					<div />
				</div>

				<div className={styles.imgs}>
					<img src={showroom} alt="" />

					<div className={styles.grid}>
						<img src={image61} alt="" />
						<img src={image62} alt="" />
						<img src={image63} alt="" />

						<img src={image64} alt="" />
						<img src={image65} alt="" />
						<img src={image66} alt="" />

						<img src={image67} alt="" />
						<img src={image68} alt="" />
						<img src={image69} alt="" />

						<img src={image70} alt="" />
						<img src={image71} alt="" />
						<img src={image72} alt="" />

						<img src={image73} alt="" />
						<img src={image74} alt="" />
						<img src={image75} alt="" />

						<img src={image76} alt="" />
						<img src={image77} alt="" />
						<img src={image78} alt="" />

						<img src={image79} alt="" />
						<img src={image80} alt="" />
						<img src={image81} alt="" />

						<img src={image82} alt="" />
						<img src={image83} alt="" />
						<img src={image84} alt="" />
					</div>
				</div>
			</div>
		</nav>

		<Reviews />

		<Footer />
	</>
);

export default Showroom;
