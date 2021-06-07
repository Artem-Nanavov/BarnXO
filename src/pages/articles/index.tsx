import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import React from 'react';
import cn from 'classnames';
import HalfArrow from 'resources/icons/halfArrow';
import globalStyles from 'resources/styles/globalStyles.scss';
import image56 from 'resources/images/image56.png';
import styles from './styles.scss';
import Article from './components/article';

const article = {
	img: image56,
	date: 'June 6, 2019',
	title: 'A Love Of Barns',
	description: 'In the heart of America, a family business built with a love of barns.',
	tags: [
		'reclaimed wood furnishing',
		'reclaimed wood tables',
		'reclaimed wood',
		'old growth wood',
		'lumber',
		'furniture',
		'reclaimed furniture',
		'America',
		'furniture blog',
		'reclaimed materials',
		'family',
		'family owned business',
		'Americana',
	],
};

const arr = [0, 1, 2, 3, 4, 5];

const ArticlesPage = () => (
	<>
		<Header />

		<nav className={globalStyles.container}>
			<div className={cn(globalStyles.wrap, styles.articles)}>
				<div className={styles.articles__header}>
					<h1 className={globalStyles.h1_title}>REPURPOSED WOOD FURNITURE NEWS</h1>

					<div className={styles.articles__navigation}>
						<HalfArrow
							height="15px"
							style={{
								transform: 'rotate(180deg)',
								position: 'absolute',
								top: 0,
								left: 0,
							}}
							fill="rgba(38, 38, 35, 0.2)"
						/>

						<HalfArrow
							height="15px"
							fill="#262623"
							style={{
								position: 'absolute',
								bottom: 0,
								right: 0,
							}}
						/>
					</div>
				</div>

				<div className={styles.articles__content}>
					<div className={styles.articles__articles}>
						{
							arr.map(() => (
								<Article
									key={Math.random()}
									date={article.date}
									img={article.img}
									title={article.title}
									description={article.description}
									tags={article.tags}
								/>
							))
						}
					</div>

					<div>
						<article className={styles.articles__stores}>
							<h2 className={styles.articles__stores_title}>Stories listing</h2>

							<div className={styles.articles__stores_grid}>
								{
									arr.slice(3).map(() => (
										<div
											key={Math.random()}
											className={styles.articles__stores_item}
											style={{backgroundImage: `url('${article.img}')`}}
										>
											<div className={styles.articles__stores_text}>
												<h3>{article.title}</h3>

												<p>{article.date}</p>
											</div>
										</div>
									))
								}
							</div>
						</article>
					</div>
				</div>
			</div>
		</nav>

		<Reviews />

		<Footer />
	</>
);

export default ArticlesPage;
