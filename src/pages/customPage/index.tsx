/* eslint-disable max-len */
import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import React from 'react';
import globalStyles from 'resources/styles/globalStyles.scss';
import firstImg from 'resources/images/customFirstImg.png';
import secondImg from 'resources/images/secondImg.png';
import Form from './components/form';
import styles from './styles.scss';

const CustomPage = () => (
	<div>
		<Header />

		<nav className={styles.custom}>
			<div className={styles.custom__wrap}>
				<h1 className={globalStyles.h1_title}>Custom Reclaimed Wood Furniture</h1>

				<h3 style={{marginTop: '50px'}}>We bring your custom Reclaimed wood futniture to Life!</h3>

				<p style={{marginTop: '15px', maxWidth: '785px'}}>Please fill out the form below for a custom quote. Give as much detail as possible to get the most accurate quote. If you&apos;re not sure, fill out as much as you can and we will call you back at your earliest convenience. </p>

				<div className={styles.custom__form}>
					<Form />

					<div className={styles.custom__imgs}>
						<img src={firstImg} alt="" />
						<img src={secondImg} alt="" />
					</div>
				</div>
			</div>
		</nav>

		<Reviews />

		<Footer />
	</div>
);

export default CustomPage;
