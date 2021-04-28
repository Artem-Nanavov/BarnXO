import React from 'react';
import styles from './styles.scss';

interface IPost {
	img: any;
	title: string;
	subTitle: string;
}

const Post = ({
	img,
	title,
	subTitle,
}: IPost) => (
	<div style={{backgroundImage: `url('${img}')`}} className={styles.post}>
		<div className={styles.post__text}>
			<h3 className={styles.post__title}>{title}</h3>

			<p className={styles.post__subTitle}>{subTitle}</p>
		</div>
	</div>
);

export default Post;
