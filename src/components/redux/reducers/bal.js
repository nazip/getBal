import * as type from '../actions/const/actionTypes/bal';

const initialState = {
  isFetching: false,
  isUpdating: false,
  error: false,
  entry: null
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case type.BAL_FETCH_REQUEST:
      return Object.assign({}, initialState, {isFetching: true});
    case type.BAL_FETCH_SUCCESS:
      return Object.assign({}, initialState, {entry: action.response},
      {comments: action.response.comment});
    case type.BAL_FETCH_ERROR:
      return Object.assign({}, initialState, {error: true});
    default:
      return state;
  }
}
