import {connect} from 'react-redux';
import {RootState} from 'main';
import CatalogItems from '../components/items';

const mapStateToProps = (state: RootState) => ({
	catalogItems: state.catalog.catalogItems,
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CatalogItems);
