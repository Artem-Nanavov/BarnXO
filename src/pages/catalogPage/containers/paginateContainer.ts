import {connect} from 'react-redux';
import {RootState} from 'main';
import Paginate from '../components/paginate';

const mapStateToProps = (state: RootState) => ({
	pageCount: 20,
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Paginate);
