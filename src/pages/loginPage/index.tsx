/* eslint-disable max-len */
import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import React from 'react';
import cn from 'classnames';
import globalStyles from 'resources/styles/globalStyles.scss';
import Button from 'library/common/components/ui/button';
import styles from './styles.scss';
import LoginForm from './components/form';

const marginTop42 = {marginTop: '42px'};

const LoginPage = () => (
	<>
		<Header />

		<nav className={cn(globalStyles.container, styles.login)}>
			<div className={globalStyles.wrap}>
				<div>
					<h1 className={globalStyles.h1_title}>New customer</h1>

					<p>By creating an account you will be able to shop faster, be up to date on an order&lsquo;s status, and keep track of the orders you have previously made.</p>

					<Button
						style={marginTop42}
						onClick={() => {}}
						text="Load more"
					/>
				</div>

				<div style={{maxWidth: '675px'}}>
					<h1 className={globalStyles.h1_title}>returning customer</h1>

					<LoginForm />
				</div>
			</div>
		</nav>

		<Reviews />

		<Footer />
	</>
);

export default LoginPage;
