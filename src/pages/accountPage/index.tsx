import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import React from 'react';
import cn from 'classnames';
import globalStyles from 'resources/styles/globalStyles.scss';
import styles from './styles.scss';

const AccountPage = () => (
	<>
		<Header />

		<nav className={globalStyles.container}>
			<div className={cn(globalStyles.wrap, styles.account)}>
				<div className={styles.account__row}>
					<h1 className={globalStyles.h1_title}>My account</h1>

					<div>
						<p>Edit your account information</p>
						<p>Change your password</p>
						<p>Modify your address book entries</p>
						<p>Modify your wish list</p>
					</div>
				</div>

				<div className={styles.account__row}>
					<h1 className={globalStyles.h1_title}>My orders</h1>

					<div>
						<p>View your order history</p>
						<p>Downloads</p>
						<p>Your Reward Points</p>
						<p>View your return requests</p>
						<p>Your transactions</p>
						<p>Recurring Payments</p>
					</div>
				</div>

				<div className={styles.account__row}>
					<h1 className={globalStyles.h1_title}>NEWSLETTER</h1>

					<div>
						<p>Subscribe/ unsubscribe to newsletter</p>
					</div>
				</div>
			</div>
		</nav>

		<Reviews />

		<Footer />
	</>
);

export default AccountPage;
