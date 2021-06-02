import Button from 'library/common/components/ui/button';
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

			<Button
				style={{marginTop: '30px'}}
				onClick={() => {}}
				text="Learn more"
			/>
		</div>

		<div
			className={styles.article__img}
			style={{
				backgroundImage: `url('${img}')`,
			}}
		/>
	</div>
);

export default Article;
