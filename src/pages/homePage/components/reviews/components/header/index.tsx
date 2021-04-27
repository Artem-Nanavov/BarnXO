import React from 'react';
import HalfArrow from 'resources/icons/halfArrow';
import smallGoogleIcon from 'resources/images/smallGoogleIcon.png';
import cn from 'classnames';
import styles from './styles.scss';

const Header = () => (
	<div className={styles.wrap}>
		<div className={styles.header}>
			<div className={styles.header__choose}>
				<button
					type="button"
					className={cn(styles.header__btn, styles.blackBtn)}
				>
					<p style={{marginLeft: 0}}>All Reviews 4.8</p>
				</button>

				<button
					type="button"
					className={styles.header__btn}
				>
					<img src={smallGoogleIcon} alt="" />

					<p>Google 4.9</p>
				</button>

				<button
					type="button"
					className={styles.header__btn}
				>
					<img src={smallGoogleIcon} alt="" />

					<p>Facebook</p>
				</button>

				<button
					type="button"
					className={styles.header__btn}
				>
					<img src={smallGoogleIcon} alt="" />

					<p>Yelp 4.0</p>
				</button>
			</div>

			<div className={styles.header__arrows}>
				<HalfArrow
					height="15px"
					style={{
						transform: 'rotate(180deg)',
						position: 'absolute',
						top: 0,
						left: 0,
					}}
					fill="rgba(38, 38, 35, 0.2)"
				/>

				<HalfArrow
					height="15px"
					fill="#262623"
					style={{
						position: 'absolute',
						bottom: 0,
						right: 0,
					}}
				/>
			</div>
		</div>
	</div>
);

export default Header;
