import React from 'react';
import Rectangle131 from 'resources/images/Rectangle131.png';
import Rectangle130 from 'resources/images/Rectangle130.png';
import Rectangle132 from 'resources/images/Rectangle132.png';
import Button from 'library/common/components/ui/button';
import styles from './styles.scss';

const SubHeader = () => (
	<div className={styles.subHeader}>
		<div className={styles.subHeader__mainImg}>
			<div className={styles.subHeader__content}>
				<div className={styles.subHeader__stick}>
					<span className={styles.subHeader__border} />

					<div className={styles.subHeader__circle}>
						<span />
					</div>
				</div>

				<div className={styles.subHeader__info}>
					<p
						className={styles.subHeader__overTitle}
					>
						High quality production
					</p>

					<p
						className={styles.subHeader__title}
					>
						FREE SHIPPING IN THE CONTINENTAL USA
					</p>

					<p className={styles.subHeader__subTitle}>
						Each piece of our furniture we handcraft is made to order with great attention to detail.
					</p>

					<Button
						color="secondary"
						onClick={() => {}}
						style={{marginTop: '40px'}}
						text="go to catalog"
					/>
				</div>
			</div>
		</div>

		<div className={styles.subHeader__imgs}>
			<img src={Rectangle130} alt="" />
			<img src={Rectangle131} alt="" />
			<img src={Rectangle132} alt="" />
		</div>
	</div>
);

export default SubHeader;
