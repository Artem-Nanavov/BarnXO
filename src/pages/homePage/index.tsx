import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import React from 'react';
import Catalog from './components/catalog';
import Examples from './components/examples';
import Info from './components/info';
import News from './components/news';
import Reviews from '../../library/common/components/reviews';
import SubHeader from './components/subHeader';

const HomePage = () => (
	<>
		<Header />

		<SubHeader />

		<Examples />

		<Info />

		<News />

		<Catalog />

		<Reviews />

		<Footer />
	</>
);

export default HomePage;
