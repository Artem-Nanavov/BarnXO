import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {RootState} from 'main';
import CatalogPage from '../index';

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(CatalogPage));
