import {connect} from 'react-redux';
import {RootState} from 'main';
import Filters from '../components/filters';
import {setFiltersValue} from '../actions';

const mapStateToProps = (state: RootState) => ({
	filters: state.catalog.filters,
	minCost: 0,
	maxCost: 1000,
});

const mapDispatchToProps = {
	setFiltersValue,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Filters);