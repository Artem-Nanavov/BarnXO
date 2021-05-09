import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import Button from 'library/common/components/ui/button';
import FormInput from 'library/common/components/ui/formInput';
import Radio from 'library/common/components/ui/radio';
import React from 'react';
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector';
import SelectArrow from 'resources/icons/selectArrow';
import globalStyles from 'resources/styles/globalStyles.scss';
import styles from './styles.scss';

const RegPage = () => {
	const [fName, setFName] = React.useState('');
	const [lName, setLName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [fax, setFax] = React.useState('');

	const [country, setCountry] = React.useState('');
	const [region, setRegion] = React.useState('');
	const [city, setCity] = React.useState('');
	const [company, setCompany] = React.useState('');
	const [address1, setAddress1] = React.useState('');
	const [address2, setAddress2] = React.useState('');
	const [code, setCode] = React.useState('');

	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');

	const [subscribe, setSubscribe] = React.useState(false);

	return (
		<>
			<Header />

			<nav className={globalStyles.container}>
				<div className={globalStyles.wrap}>
					<form action="#" className={styles.form}>
						<h1 className={globalStyles.h1_title}>your personal details</h1>

						<div className={styles.form__block}>
							<div className={styles.form__grid}>
								<FormInput
									placeholder="First Name"
									onChange={setFName}
									value={fName}
									isError={false}
								/>

								<FormInput
									placeholder="Last Name"
									onChange={setLName}
									value={lName}
									isError={false}
								/>
							</div>

							<FormInput
								placeholder="E-mail address"
								onChange={setEmail}
								value={email}
								isError={false}
							/>

							<div className={styles.form__grid}>
								<FormInput
									placeholder="Telephone"
									onChange={setPhone}
									value={phone}
									isError={false}
								/>

								<FormInput
									placeholder="Fax"
									onChange={setFax}
									value={fax}
									isError={false}
								/>
							</div>
						</div>

						<h1 className={globalStyles.h1_title}>your address</h1>

						<div className={styles.form__block}>
							<div className={styles.form__select}>
								<CountryDropdown
									defaultOptionLabel="Country"
									value={country}
									onChange={setCountry}
								/>

								<SelectArrow />
							</div>

							<div className={styles.form__select}>
								<RegionDropdown
									blankOptionLabel="Region/ State"
									defaultOptionLabel="Region/ State"
									country={country}
									value={region}
									onChange={setRegion}
								/>

								<SelectArrow />
							</div>

							<div className={styles.form__grid}>
								<FormInput
									placeholder="City"
									onChange={setCity}
									value={city}
									isError={false}
								/>

								<FormInput
									placeholder="Company"
									onChange={setCompany}
									value={company}
									isError={false}
								/>
							</div>

							<div className={styles.form__grid}>
								<FormInput
									placeholder="Address 1"
									onChange={setAddress1}
									value={address1}
									isError={false}
								/>

								<FormInput
									placeholder="Address 2"
									onChange={setAddress2}
									value={address2}
									isError={false}
								/>
							</div>

							<FormInput
								placeholder="Post Code"
								onChange={setCode}
								value={code}
								isError={false}
							/>
						</div>

						<h1 className={globalStyles.h1_title}>your password</h1>

						<div className={styles.form__block}>
							<div className={styles.form__grid}>
								<FormInput
									placeholder="Password"
									onChange={setPassword}
									value={password}
									isError={false}
								/>

								<FormInput
									placeholder="Password Confirm"
									onChange={setConfirmPassword}
									value={confirmPassword}
									isError={false}
								/>
							</div>
						</div>

						<h1 className={globalStyles.h1_title}>Newsletter</h1>

						<div className={styles.newsletter}>
							<div className={styles.subscribe}>
								<p className={styles.newsletterText}>Subscribe</p>

								<div>
									<Radio
										onChange={() => setSubscribe(true)}
										text="Yes"
										isChecked={subscribe}
									/>

									<Radio
										onChange={() => setSubscribe(false)}
										text="No"
										isChecked={!subscribe}
									/>
								</div>
							</div>

							<p className={styles.newsletterText}>
								I have read and agree with
								{' '}
								<code>privacy policy</code>
							</p>
						</div>

						<div className={styles.form__btns}>
							<Button
								onClick={() => {}}
								text="Login"
							/>

							<Button
								color="none"
								onClick={() => {}}
								text="Forgotten password"
							/>
						</div>
					</form>
				</div>
			</nav>

			<Reviews />

			<Footer />
		</>
	);
};

export default RegPage;
