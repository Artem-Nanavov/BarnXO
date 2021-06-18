import React from 'react';
import cn from 'classnames';
import googleIcon from 'resources/images/googleIcon.png';
import StarIcon from 'resources/icons/starIcon';
import styles from './styles.scss';

interface IReview {
	img: any;
	username: string;
	date: string;
	// value?: number
	description: string;
	mt?: boolean;
	w100?: boolean;
}

const Review = ({
	img,
	username,
	date,
	mt,
	w100,
	// value,
	description,
}: IReview) => (
	<div className={cn(styles.review, mt ? styles.mt : '', w100 ? styles.w100 : '')}>
		<div className={styles.review__header}>
			<img src={img} alt="" />

			<div className={styles.review__info}>
				<p>{username}</p>

				<div className={styles.review__rating}>
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarIcon />
				</div>
			</div>
		</div>

		<p className={styles.review__description} style={{ marginTop: '20px' }}>{description}</p>

		<div className={styles.review__date}>
			<p className={styles.review__postedOn}>Posted on</p>

			<p className={styles.date__date}>{date}</p>
		</div>

		<img style={{ marginTop: '30px' }} src={googleIcon} alt="" />
	</div>
);

export default Review;
