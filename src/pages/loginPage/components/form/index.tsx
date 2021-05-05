import Button from 'library/common/components/ui/button';
import FormInput from 'library/common/components/ui/formInput';
import React from 'react';
import styles from './styles.scss';

const regex = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;
const mw = {maxWidth: '372px', width: '100%'};

const LoginForm = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const [isEmailError, setIsEmailError] = React.useState(false);

	React.useEffect(() => {
		if (email.trim().length > 0) {
			setIsEmailError(!regex.test(email));
		}
	}, [email]);

	return (
		<div className={styles.loginForm}>
			<form action="#">
				<div className={styles.loginForm__email}>
					<FormInput
						style={mw}
						placeholder="E-mail address"
						onChange={setEmail}
						value={email}
						isError={isEmailError}
					/>

					<div style={{display: isEmailError ? 'flex' : 'none'}}>
						<p>Please enter a valid email address</p>
						<p>For example, “johndoe@gmail.com”</p>
					</div>
				</div>

				<FormInput
					style={mw}
					placeholder="Password"
					onChange={setPassword}
					value={password}
					isError={false}
				/>
			</form>

			<div style={{maxWidth: '630px'}}>
				<Button
					style={{width: '100%'}}
					onClick={() => {}}
					text="Login"
				/>

				<Button
					style={{width: '100%'}}
					color="none"
					onClick={() => {}}
					text="Forgotten password"
				/>
			</div>
		</div>
	);
};

export default LoginForm;
