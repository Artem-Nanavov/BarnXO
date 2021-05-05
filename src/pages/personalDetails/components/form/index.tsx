import FormInput from 'library/common/components/ui/formInput';
import React from 'react';
import styles from './styles.scss';

const PersonalForm = () => {
	const [fName, setFName] = React.useState('');
	const [lName, setLName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [fax, setFax] = React.useState('');

	return (
		<form className={styles.form} action="#">
			<div>
				<FormInput
					isError={false}
					placeholder="First Name"
					onChange={setFName}
					value={fName}
				/>

				<FormInput
					isError={false}
					placeholder="Last Name"
					onChange={setLName}
					value={lName}
				/>
			</div>

			<FormInput
				isError={false}
				placeholder="E-mail address"
				onChange={setEmail}
				value={email}
			/>

			<div>
				<FormInput
					isError={false}
					placeholder="Telephone"
					onChange={setPhone}
					value={phone}
				/>

				<FormInput
					isError={false}
					placeholder="Fax"
					onChange={setFax}
					value={fax}
				/>
			</div>
		</form>
	);
};

export default PersonalForm;
