import React from 'react';
import EmailIcon from 'resources/icons/email';
import PhoneIcon from 'resources/icons/phone';
import {NavLink} from 'react-router-dom';
import Button from '../ui/button';
import styles from './styles.scss';

const Footer = () => (
	<footer className={styles.footer}>
		<div>
			<div className={styles.footer__content}>
				<div className={styles.footer__info}>
					<ul className={styles.footer__row}>
						<li className={styles.footer__item}>
							<h2>SHOP</h2>

							<div className={styles.footer__block}>
								<p>All Furniture</p>
								<p>Home Furniture</p>
								<p>Office Furniture</p>
								<NavLink to="/wood">
									<p>Wood, Metal Seating</p>
								</NavLink>
								<p>DIY/Wholesale</p>
							</div>
						</li>

						<li className={styles.footer__item}>
							<h2>MENU</h2>

							<div className={styles.footer__block}>
								<NavLink to="/">
									<p>Home</p>
								</NavLink>
								<p>Terms & Conditions</p>
								<p>Privacy Policy</p>
								<p>Warranties</p>
								<p>Maintenance</p>
							</div>
						</li>

						<li className={styles.footer__item}>
							<h2>CONTCACT</h2>

							<div className={styles.footer__block}>
								<div>
									<PhoneIcon />

									<a href="tel:(847) 514-4276">(847) 514-4276</a>
								</div>

								<div>
									<EmailIcon />

									<a href="mailto:Info@barnxo.com">Info@barnxo.com</a>
								</div>
							</div>
						</li>
					</ul>
				</div>

				<div className={styles.footer__signUp}>
					<h2>STAY CONNECTED</h2>

					<div>
						<input
							type="text"
							placeholder="Enter your mail"
						/>

						<Button
							color="secondary"
							style={{width: '100%', marginTop: '10px'}}
							text="Sign Up"
							onClick={() => {}}
						/>
					</div>
				</div>
			</div>
		</div>

		<div className={styles.footer__agreements}>
			<div>
				<p>Privacy Policy</p>
				<p>User Agreement</p>
			</div>
		</div>
	</footer>
);

export default Footer;
