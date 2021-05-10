import Tag from 'library/common/components/tag';
import React from 'react';
import styles from './styles.scss';

interface IArticle {
	title: string;
	description: string;
	img: string;
	date: string;
	tags: string[];
}

const Article = ({
	title,
	description,
	img,
	date,
	tags,
}: IArticle) => (
	<div className={styles.article}>
		<img className={styles.article__img} src={img} alt="" />

		<div className={styles.article__content}>
			<div className={styles.article__header}>
				<h4 className={styles.article__title}>{title}</h4>

				<p className={styles.article__date}>{date}</p>
			</div>

			<p className={styles.article__description}>{description}</p>

			<div className={styles.article__tags}>
				{
					tags.map((tag) => (
						<Tag text={tag} />
					))
				}
			</div>
		</div>
	</div>
);

export default Article;
