/* eslint-disable max-len */
import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import React from 'react';
import cn from 'classnames';
import globalStyles from 'resources/styles/globalStyles.scss';
import image58 from 'resources/images/image58.png';
import CatalogItem from 'library/common/components/catalogItem';
import Rectangle144 from 'resources/images/Rectangle144.png';
import styles from './styles.scss';

const CommercialPage = () => (
	<>
		<Header />

		<nav className={globalStyles.container}>
			<div className={cn(globalStyles.wrap, styles.commercial__wrap)}>
				<div style={{ maxWidth: '809px' }} className={globalStyles.title}>
					<h1>Commercial Reclaimed Wood Furniture</h1>

					<div />
				</div>

				<img src={image58} alt="" />

				<h3>Looking To Fill Your Commercial Space With Some Beautiful Reclaimed Wood Furniture?</h3>

				<p>
					We have built many pieces for commercial spaces and can help you fill a space of any size. If you have your own design in mind, we can help with that too! Simply fill out the form below and we will get back with you right away to discuss your project.
				</p>

				<div style={{ maxWidth: '616px', marginTop: '90px' }} className={globalStyles.title}>
					<h1>BUY NOW — Trending Furniture</h1>

					<div />
				</div>

				<div className={styles.commercial__catalog}>
					<CatalogItem
						image={Rectangle144}
						title="Тут будет название товара в 2 строки"
						description="This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal..."
						price="230.00"
					/>

					<CatalogItem
						image={Rectangle144}
						title="Тут будет название товара в 2 строки"
						description="This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal..."
						price="230.00"
					/>

					<CatalogItem
						image={Rectangle144}
						title="Тут будет название товара в 2 строки"
						description="This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal..."
						price="230.00"
					/>

					<CatalogItem
						image={Rectangle144}
						title="Тут будет название товара в 2 строки"
						description="This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal..."
						price="230.00"
					/>

					<CatalogItem
						image={Rectangle144}
						title="Тут будет название товара в 2 строки"
						description="This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal..."
						price="230.00"
					/>

					<CatalogItem
						image={Rectangle144}
						title="Тут будет название товара в 2 строки"
						description="This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal..."
						price="230.00"
					/>

					<CatalogItem
						image={Rectangle144}
						title="Тут будет название товара в 2 строки"
						description="This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal..."
						price="230.00"
					/>

					<CatalogItem
						image={Rectangle144}
						title="Тут будет название товара в 2 строки"
						description="This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal..."
						price="230.00"
					/>
				</div>
			</div>
		</nav>

		<Reviews />

		<Footer />
	</>
);

export default CommercialPage;
