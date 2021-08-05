import CatalogItem from 'library/common/components/catalogItem';
import React from 'react';
import { ICatalogItem } from 'types/catalog';
import styles from './styles.scss';

interface ICatalogItems {
	catalogItems: ICatalogItem[];
}

const CatalogItems = ({
	catalogItems,
}: ICatalogItems) => (
	<div className={styles.catalogItems}>
		{
			catalogItems.map((item) => (
				<CatalogItem
					key={Math.random()}
					description={item.description}
					image={item.image}
					price={item.price}
					title={item.name}
				/>
			))
		}
	</div>
);

export default CatalogItems;
