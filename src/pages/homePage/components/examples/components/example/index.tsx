import React from 'react';
import HalfArrow from 'resources/icons/halfArrow';
import styles from './styles.scss';

interface IExample {
	img: any;
	title: string;
}

const Example = ({
	img,
	title,
}: IExample) => (
	<div
		className={styles.example}
		style={{backgroundImage: `url('${img}')`}}
	>
		<div className={styles.example__goTo}>
			<h3 className={styles.example__title}>{title}</h3>

			<HalfArrow />
		</div>
	</div>
);

export default Example;
