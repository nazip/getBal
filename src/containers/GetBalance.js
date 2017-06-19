import { connect } from 'react-redux';
import BalView from '../components/views/BalView';
import { fetchBal, lastLog } from '../components/redux/actions/Bal';

const stateToProps = (state) => (
  {
    item: state.bal.entry,
    isFetching: state.bal.fetching,
    error: state.bal.error,
    id: state.bal.entry.id
  }
);

const actionToProps = (dispatch) => (
  {
    lastLog: (id) => (dispatch(lastLog(id))),
    fetchBal: (id) => (dispatch(fetchBal(id)))
  }
);

export default connect(stateToProps, actionToProps)(BalView);
