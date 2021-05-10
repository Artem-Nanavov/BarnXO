import React from 'react';
import StarDefault from 'resources/icons/starDefault';
import StarOutlined from 'resources/icons/starOutlined';
import styles from './styles.scss';

interface IFavorite {
	onClick: () => void;
}

const Favorite = ({
	onClick,
}: IFavorite) => (
	<button
		onClick={onClick}
		className={styles.favorite}
		type="button"
	>
		<StarOutlined />

		<StarDefault />
	</button>
);

export default Favorite;
