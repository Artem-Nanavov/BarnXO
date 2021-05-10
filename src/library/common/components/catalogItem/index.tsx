import React from 'react';
import Button from '../ui/button';
import Favorite from '../ui/favorite';
import styles from './styles.scss';

interface IItem {
	img: any;
	title: string;
	description: string;
	price: string;
}

const CatalogItem = ({
	img,
	title,
	description,
	price,
}: IItem) => (
	<div className={styles.item}>
		<div className={styles.item__img}>
			<img src={img} alt="" />
		</div>

		<div style={{padding: '0 17.5px'}}>
			<h2 className={styles.item__title}>{title}</h2>

			<p className={styles.item__description}>
				{description}
			</p>

			<p className={styles.item__price}>
				$
				{price}
			</p>
		</div>

		<div className={styles.item__actions}>
			<Favorite onClick={() => {}} />

			<Button
				onClick={() => {}}
				text="add to cart"
			/>
		</div>
	</div>
);

export default CatalogItem;
