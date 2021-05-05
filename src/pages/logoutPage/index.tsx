import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import Button from 'library/common/components/ui/button';
import cn from 'classnames';
import globalStyles from 'resources/styles/globalStyles.scss';
import React from 'react';
import styles from './styles.scss';

const LogoutPage = () => (
	<>
		<Header />

		<nav className={globalStyles.container}>
			<div className={cn(globalStyles.wrap, styles.logout)}>
				<p>You have been logged off your account. It is now safe to leave the computer.</p>
				<p style={{marginTop: '16px'}}>
					Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account.
				</p>

				<Button
					onClick={() => {}}
					text="Continue"
				/>
			</div>
		</nav>

		<Reviews />

		<Footer />
	</>
);

export default LogoutPage;
