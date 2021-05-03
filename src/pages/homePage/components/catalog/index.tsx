import Button from 'library/common/components/ui/button';
import React from 'react';
import Rectangle144 from 'resources/images/Rectangle144.png';
import globalStyles from 'resources/styles/globalStyles.scss';
import CatalogItem from '../../../../library/common/components/catalogItem';
import styles from './styles.scss';

const Catalog = () => (
	<div style={{marginTop: '200px', width: '100vw'}}>
		<div style={{maxWidth: '615px'}} className={globalStyles.title}>
			<h1>BUY NOW — Trending Furniture</h1>

			<div />
		</div>

		<div className={styles.catalog}>
			<CatalogItem
				img={Rectangle144}
				title="Тут будет название товара в 2 строки"
				description="This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal..."
				price="230.00"
			/>

			<CatalogItem
				img={Rectangle144}
				title="Тут будет название товара в 2 строки"
				description="This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal..."
				price="230.00"
			/>

			<CatalogItem
				img={Rectangle144}
				title="Тут будет название товара в 2 строки"
				description="This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal..."
				price="230.00"
			/>

			<CatalogItem
				img={Rectangle144}
				title="Тут будет название товара в 2 строки"
				description="This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal..."
				price="230.00"
			/>

			<CatalogItem
				img={Rectangle144}
				title="Тут будет название товара в 2 строки"
				description="This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal..."
				price="230.00"
			/>

			<CatalogItem
				img={Rectangle144}
				title="Тут будет название товара в 2 строки"
				description="This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal..."
				price="230.00"
			/>

			<CatalogItem
				img={Rectangle144}
				title="Тут будет название товара в 2 строки"
				description="This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal..."
				price="230.00"
			/>

			<CatalogItem
				img={Rectangle144}
				title="Тут будет название товара в 2 строки"
				description="This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal..."
				price="230.00"
			/>
		</div>

		<div className={globalStyles.center}>
			<Button
				style={{marginTop: '60px', width: '300px'}}
				text="See catalog"
				onClick={() => {}}
			/>
		</div>
	</div>
);

export default Catalog;
