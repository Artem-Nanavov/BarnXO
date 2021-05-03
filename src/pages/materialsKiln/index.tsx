/* eslint-disable max-len */
import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import React from 'react';
import cn from 'classnames';
import globalStyles from 'resources/styles/globalStyles.scss';
import image60 from 'resources/images/image60.png';
import styles from './styles.scss';

const MaterialsKiln = () => (
	<>
		<Header />

		<nav className={globalStyles.container}>
			<div className={cn(globalStyles.wrap, styles.kiln)}>
				<div style={{maxWidth: '557px'}} className={globalStyles.title}>
					<h1>Kiln Dried Reclaimed Wood</h1>

					<div />
				</div>

				<img src={image60} alt="" />

				<h3>What Is Kiln Dried Reclaimed Wood?</h3>

				<p style={{margin: '0', marginTop: '30px'}}>Kiln drying is a standard practice in wood production mills and serves to efficiently bring green lumber moisture levels down to “workable” range–moisture content levels to prevent the array of problems that can be caused by excess moisture levels in wood.</p>
				<p style={{margin: '16px 0'}}>Depending on the origin, species, and type of wood, the moisture content before kiln drying can be 15% or greater when we acquire it. Shrinkage can be a concern if the moisture level is not lowered prior to use in our wood shop, depending on the application of the material.</p>
				<p style={{margin: '0'}}>Prior to milling reclaimed wood, it is recommended to bringing the moisture content down to the 6% to 8% range to reduce the potential for slight shrinkage. This also ensures that the wood runs more smoothly through our machines adding a milled profile.</p>

				<h3>Other Benefits Of Kiln Dried Reclaimed Wood</h3>

				<div className={styles.kiln__list}>
					<div>
						<div className={styles.kiln__dot} />

						<p style={{margin: '0'}}>Lowering the weight of the wood, saving on shipping costs.</p>
					</div>

					<div>
						<div className={styles.kiln__dot} />

						<p style={{margin: '0'}}>Kiln drying sterilizes the wood killing any insects or microbes present, which can be especially important for interior applications.</p>
					</div>
				</div>
			</div>
		</nav>

		<Reviews />

		<Footer />
	</>
);

export default MaterialsKiln;
