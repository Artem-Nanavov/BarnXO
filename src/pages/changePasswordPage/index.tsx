import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import FormInput from 'library/common/components/ui/formInput';
import React from 'react';
import cn from 'classnames';
import globalStyles from 'resources/styles/globalStyles.scss';
import styles from './styles.scss';

const ChangePasswordPage = () => {
	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');

	return (
		<>
			<Header />

			<nav className={globalStyles.container}>
				<div className={cn(globalStyles.wrap, styles.changePassword)}>
					<h1 className={globalStyles.h1_title}>your password</h1>

					<div className={styles.changePassword__inputs}>
						<FormInput
							isError={false}
							placeholder="Password"
							onChange={setPassword}
							value={password}
						/>

						<FormInput
							isError={false}
							placeholder="Password Confirm"
							onChange={setConfirmPassword}
							value={confirmPassword}
						/>
					</div>
				</div>
			</nav>

			<Reviews />

			<Footer />
		</>
	);
};

export default ChangePasswordPage;
