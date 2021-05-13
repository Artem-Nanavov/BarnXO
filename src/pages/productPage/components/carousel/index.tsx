import React from 'react';
import cn from 'classnames';
import sliceOfCount from 'library/utils/sliceOfCount';
import styles from './styles.scss';

interface ICarousel {
	imgs: string[];
	_currentImg: string;
}

const Carousel = ({
	imgs,
	_currentImg,
}: ICarousel) => {
	const [currentImg, setCurrentImg] = React.useState(_currentImg);
	const [imgsForCarousel, setImgsForCarousel] = React.useState(sliceOfCount(imgs, 3));

	const setNewImg = React.useCallback((img: string) => {
		const indexOfImg = imgs.indexOf(img);

		setCurrentImg(imgs[indexOfImg]);
		setImgsForCarousel(sliceOfCount(imgs, 3, indexOfImg));
	}, [currentImg]);

	return (
		<div className={styles.carousel}>
			<img src={currentImg} alt="" />

			<div className={styles.carousel__subImgs}>
				{
					imgsForCarousel.map((img) => (
						<div
							key={Math.random()}
							onClick={() => setNewImg(img)}
							className={cn(styles.carousel__item, img === currentImg ? styles.carousel__selected : '')}
						>
							<img src={img} alt="" />
						</div>
					))
				}
			</div>
		</div>
	);
};

export default Carousel;
