import React from 'react';
import styles from './styles.scss';

interface IArticle {
	img: any;
	title: string;
	subTitle: string;
	order?: number;
}

const Article = ({
	img,
	title,
	subTitle,
	order = 1,
}: IArticle) => (
	<div className={styles.article}>
		<div className={styles.article__text} style={{order}}>
			<h2 className={styles.article__title}>{title}</h2>

			<p className={styles.article__subTitle}>{subTitle}</p>

			<button
				className={styles.article__btn}
				type="button"
			>
				Learn more
			</button>
		</div>

		<div style={{backgroundImage: `url('${img}')`, width: '784px', height: '404px'}} />
	</div>
);

export default Article;
