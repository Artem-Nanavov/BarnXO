import { connect } from 'react-redux';
import Paginate from '../components/paginate';

const mapStateToProps = () => ({
	pageCount: 20,
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Paginate);
