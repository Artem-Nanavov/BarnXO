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
							<div className={styles.nav__link_item}>
								<p>Company</p>

								<ArrowIcon />
							</div>

							<div className={styles.nav__link_navigation}>
								<div style={{maxWidth: '169px'}} className={styles.nav__link_navigation_row}>
									<NavLink to="/aboutUs">
										<p>About Us</p>

										<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
									</NavLink>

									<NavLink to="/history">
										<p>History</p>

										<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
									</NavLink>

									<NavLink to="/ourMission">
										<p>Our Mission</p>

										<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
									</NavLink>

									<NavLink to="/blog">
										<p>Blog</p>

										<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
									</NavLink>
								</div>
							</div>
						</li>

						<li className={styles.nav__link}>
							<div className={styles.nav__link_item}>
								<p>Reviews</p>

								<ArrowIcon />
							</div>

							<div className={styles.nav__link_navigation}>
								<div style={{maxWidth: '261px'}} className={styles.nav__link_navigation_row}>
									<NavLink to="/googleReviews">
										<p>Leave a Google Review</p>

										<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
									</NavLink>
								</div>
							</div>
						</li>

						<li className={styles.nav__link}>
							<div className={styles.nav__link_item}>
								<p>Shop</p>

								<ArrowIcon />
							</div>

							<div style={{left: 0}} className={styles.nav__link_navigation}>
								<div style={{maxWidth: '1600px'}} className={styles.showWrap}>
									<div className={styles.showWrap__row}>
										<h3>HOME FURNITURE</h3>

										<div>
											<NavLink to="/googleReviews">
												<p>Coffee Tables</p>

												<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
											</NavLink>

											<NavLink to="/googleReviews">
												<p>Dining Tables</p>

												<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
											</NavLink>

											<NavLink to="/googleReviews">
												<p>Entertainment Centers</p>

												<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
											</NavLink>

											<NavLink to="/googleReviews">
												<p>Entry Sofa,  Console Tables</p>

												<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
											</NavLink>

											<NavLink to="/googleReviews">
												<p>Shelving, Organization</p>

												<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
											</NavLink>
										</div>
									</div>

									<div className={styles.showWrap__row}>
										<h3>HOME FURNITURE</h3>

										<div>
											<NavLink to="/googleReviews">
												<p>Conference Tables</p>

												<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
											</NavLink>

											<NavLink to="/googleReviews">
												<p>Executive, Computer Tables</p>

												<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
											</NavLink>
										</div>
									</div>

									<div className={styles.showWrap__row}>
										<h3>WOOD, METAL SEATING</h3>

										<div>
											<NavLink to="/googleReviews">
												<p>Barstools, Stools</p>

												<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
											</NavLink>

											<NavLink to="/googleReviews">
												<p>Benches</p>

												<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
											</NavLink>

											<NavLink to="/googleReviews">
												<p>Chairs</p>

												<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
											</NavLink>
										</div>
									</div>

									<div className={styles.showWrap__row}>
										<h3>DYI/WHOLESALE</h3>

										<div>
											<NavLink to="/googleReviews">
												<p>Reclaimed Accent Walls</p>

												<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
											</NavLink>

											<NavLink to="/googleReviews">
												<p>Reclaimed Wood Flooring</p>

												<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
											</NavLink>

											<NavLink to="/googleReviews">
												<p>Table Legs</p>

												<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
											</NavLink>
										</div>
									</div>
								</div>
							</div>
						</li>

						<li className={styles.nav__link}>
							<NavLink to="/custom">
								<p>Custom</p>
							</NavLink>
						</li>

						<li className={styles.nav__link}>
							<div className={styles.nav__link_item}>
								<p>Materials</p>

								<ArrowIcon />
							</div>

							<div className={styles.nav__link_navigation}>
								<div style={{maxWidth: '295px'}} className={styles.nav__link_navigation_row}>
									<NavLink to="/wood">
										<p>Reclaimed Wood</p>

										<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
									</NavLink>

									<NavLink to="/kiln">
										<p>Kiln Dried Reclaimed Wood</p>

										<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
									</NavLink>

									<NavLink to="/finishes">
										<p>Finishes</p>

										<ArrowIcon width="10px" height="5px" style={{transform: 'rotate(-90deg)'}} />
									</NavLink>
								</div>
							</div>
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
