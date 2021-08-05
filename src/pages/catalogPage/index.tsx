import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import React, {useState} from 'react';
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
			.then((data) => setCatalogItemsValue(data.data.data));

		// serverFetch.get('/products/category/20?subcategory=26')
		// 	.then((data) => console.log('data', data));
		serverFetch.get('/categories').then((data) => setFiltersValue(data.data.data));
	}, []);

	const [searchValue, setSearchValue] = React.useState('');
	const [activeItem, setActiveItem] = useState(null);
	const [activeCategories, setActiveCategories] = useState(null);

	const search = () => {
		let subcategory = '';
		let category = '';

		if (activeItem) subcategory += `?subcategory=${activeItem}`
		if (activeCategories) category = `category=${activeCategories}`

		serverFetch.get(`/products/${category}${subcategory}&search=${searchValue}`).then((data) => setCatalogItemsValue(data.data.data));
	};

	return (
		<>
			<Header />

			<nav className={globalStyles.container}>
				<div className={cn(globalStyles.wrap, styles.catalog)}>
					<div>
						<Filters
							activeItem={activeItem}
							setActiveItem={setActiveItem}
							activeCategories={activeCategories}
							setActiveCategories={setActiveCategories}
						/>
					</div>

					<div className={styles.catalog__content}>
						<h1 className={globalStyles.h1_title}>Catalog</h1>

						<CatalogHeader onEnter={search} searchValue={searchValue} setSearchValue={setSearchValue} />

						<ResetFilters />

						<CatalogItems />

						{/* <Paginate /> */}
					</div>
				</div>
			</nav>

			<Footer />
		</>
	);
};

export default CatalogPage;
