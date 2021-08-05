import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CatalogPage from '../index';
import { setCatalogItemsValue, setFiltersValue } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
	setCatalogItemsValue,
	setFiltersValue,
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(CatalogPage));
