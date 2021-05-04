import SearchInput from 'pages/homePage/components/searchInput';
import React from 'react';
import {NavLink} from 'react-router-dom';
import ArrowIcon from 'resources/icons/arrowIcon';
import CartIcon from 'resources/icons/cartIcon';
import LikeIcon from 'resources/icons/likeIcon';
import LogoIcon from 'resources/images/logo.png';
import styles from './styles.scss';
import Button from '../ui/button';

const Header = () => (
	<header className={styles.wrap}>
		<div className={styles.header}>
			<div className={styles.content}>
				<ul className={styles.header__list}>
					<li className={styles.header__link}>
						<NavLink to="/commercial">
							<p>Commercial</p>
						</NavLink>
					</li>
					<li className={styles.header__border} />
					<li className={styles.header__link}>
						<p>Showroom</p>
					</li>
					<li className={styles.header__border} />
					<li className={styles.header__link}>
						<p>Contact us</p>
					</li>
				</ul>

				<div className={styles.header__options}>
					<LikeIcon />

					<span className={styles.header__border} />

					<div className={styles.header__cart}>
						<CartIcon />

						<p className={styles.header__price}>1 560$</p>
					</div>
				</div>
			</div>
		</div>

		<nav className={styles.nav}>
			<div className={styles.content}>
				<div className={styles.nav__info}>
					<img src={LogoIcon} alt="" />

					<ul className={styles.nav__links}>
						<li className={styles.nav__link}>
							<p>Company</p>

							<ArrowIcon />
						</li>

						<li className={styles.nav__link}>
							<p>Reviews</p>

							<ArrowIcon />
						</li>

						<li className={styles.nav__link}>
							<p>Shop</p>

							<ArrowIcon />
						</li>

						<li className={styles.nav__link}>
							<NavLink to="/custom">
								<p>Custom</p>
							</NavLink>
						</li>

						<li className={styles.nav__link}>
							<p>Materials</p>

							<ArrowIcon />
						</li>

						<li>
							<SearchInput />
						</li>
					</ul>
				</div>

				<div className={styles.nav__authBtns}>
					<button
						className={styles.nav__btn}
						type="button"
					>
						Log in
					</button>

					<Button
						color="outlined"
						size="small"
						text="register account"
						onClick={() => {}}
					/>

					{/* <button
						className={cn(styles.nav__btn, styles.nav__border)}
						type="button"
					>
						register account
					</button> */}
				</div>
			</div>
		</nav>
	</header>
);

export default Header;
