import React from 'react';
import googleIcon from 'resources/images/googleIcon.png';
import StarIcon from 'resources/icons/starIcon';
import styles from './styles.scss';

interface IReview {
	img: any;
	username: string;
	date: string;
	value: number
	description: string;
}

const Review = ({
	img,
	username,
	date,
	value,
	description,
}: IReview) => (
	<div className={styles.review}>
		<div className={styles.review__header}>
			<img src={img} alt="" />

			<div className={styles.review__info}>
				<p>{username}</p>

				<div className={styles.review__rating}>
					<div>
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon />
					</div>

					<p>{date}</p>
				</div>
			</div>
		</div>

		<p className={styles.review__description} style={{marginTop: '20px'}}>{description}</p>

		<p className={styles.review__postedOn} style={{marginTop: '10px'}}>Posted on</p>

		<img style={{marginTop: '30px'}} src={googleIcon} alt="" />
	</div>
);

export default Review;
