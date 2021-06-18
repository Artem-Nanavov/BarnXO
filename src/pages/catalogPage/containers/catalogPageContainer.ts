import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CatalogPage from '../index';

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(CatalogPage));
