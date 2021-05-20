import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {RootState} from 'main';
import ProductPage from '../index';

const mapStateToProps = (state: RootState) => ({
	price: 1581.36,
	rating: 4.5,
	title: 'Bar Height U-Shape Dining Table',
	description: 'sfsfsf',
	tags: [
		'tables with u shape legs',
		'dining tables',
		'conference tables',
		'business meeting tables',
		'breakfast tables',
		'family tables',
		'office tables',
		'reclaimed wood dining table',
		'table with reclaimed wood',
		'dining table with u shape legs',
		'bar height dining tables',
	],
});

const mapDispatchToProps = {};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(ProductPage));
