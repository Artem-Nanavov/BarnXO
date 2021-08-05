import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import React from 'react';
import globalStyles from 'resources/styles/globalStyles.scss';
import cn from 'classnames';
import serverFetch from 'library/utils/server';
import CatalogHeader from './components/catalogHeader';
import ResetFilters from './containers/resetFiltersContainer';
import Filters from './containers/filtersContainer';
import styles from './styles.scss';
import CatalogItems from './containers/catalogItemsContainer';
import Paginate from './containers/paginateContainer';

const CatalogPage = ({ setCatalogItemsValue, setFiltersValue }: any) => {
	React.useEffect(() => {
		serverFetch.get('/products', { headers: { 'X-Oc-Image-Dimension': '347x273' } })
			.then((data) => setCatalogItemsValue({ items: data.data.data }));
		serverFetch.get('/categories').then((data) => setFiltersValue(data.data.data));
	}, []);

	return (
		<>
			<Header />

			<nav className={globalStyles.container}>
				<div className={cn(globalStyles.wrap, styles.catalog)}>
					<div>
						<Filters />
					</div>

					<div className={styles.catalog__content}>
						<h1 className={globalStyles.h1_title}>Catalog</h1>

						<CatalogHeader />

						<ResetFilters />

						<CatalogItems />

						<Paginate />
					</div>
				</div>
			</nav>

			<Footer />
		</>
	);
};

export default CatalogPage;
