import React from 'react';
import parse from 'html-react-parser';
import { ICatalogItem } from 'types/catalog';
import Button from '../ui/button';
import Favorite from '../ui/favorite';
import styles from './styles.scss';

const CatalogItem = ({
	image,
	title: name,
	description,
	price,
}: ICatalogItem) => (
	<div className={styles.item}>
		<div className={styles.item__img}>
			<img src={image} alt="" />
		</div>

		<div style={{ padding: '0 17.5px' }}>
			<h2 className={styles.item__title}>{name}</h2>

			<div className={styles.item__description}>
				{parse(description)}
			</div>

			<p className={styles.item__price}>
				$
				{price}
			</p>
		</div>

		<div className={styles.item__actions}>
			<Favorite onClick={() => { }} />

			<Button
				onClick={() => { }}
				text="add to cart"
			/>
		</div>
	</div>
);

export default CatalogItem;
