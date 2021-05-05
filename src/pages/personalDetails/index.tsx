import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import React from 'react';
import cn from 'classnames';
import globalStyles from 'resources/styles/globalStyles.scss';
import PersonalForm from './components/form';
import styles from './styles.scss';

const PersonalDetailsPage = () => (
	<>
		<Header />

		<nav className={cn(globalStyles.container, styles.personalDetails)}>
			<div className={globalStyles.wrap}>
				<h1 className={globalStyles.h1_title}>your personal details</h1>

				<PersonalForm />
			</div>
		</nav>

		<Reviews />

		<Footer />
	</>
);

export default PersonalDetailsPage;
