import * as types from '../const/actionTypes/Post';
import * as t from '../const/actionTypes/Comments';

export function fetchBal(id) {
  return {
    API_CALL: {
      endpoint: `/post/${id}.json`,
      method: 'GET',
      query: {},
      types: [
        types.POST_FETCH_REQUEST,
        types.POST_FETCH_SUCCESS,
        types.POST_FETCH_ERROR
      ]
    }
  };
}

export function lastLog(id) {
  return {
    API_CALL: {
      endpoint: `/post/${id}.json`,
      method: 'GET',
      query: {},
      types: [
        types.POST_FETCH_REQUEST,
        types.POST_FETCH_SUCCESS,
        types.POST_FETCH_ERROR
      ]
    }
  };
}
