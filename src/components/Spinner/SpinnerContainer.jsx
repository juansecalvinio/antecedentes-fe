import { connect } from 'react-redux';
// import { Spinner } from 'react-bootstrap';
import Spinner from './Spinner';
import { withRouter } from 'react-router-dom';

import { loadingOn, loadingOff } from './../../store/actions/appActions';

const mapStateToProps = (state) => {
    return {
        loading: state.appReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadingOn: () => dispatch(loadingOn()),
        loadingOff: () => dispatch(loadingOff())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Spinner));