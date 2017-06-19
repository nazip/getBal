import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import API from '../middleware/API';

const store = (initialState) =>  createStore(
  reducers,
  initialState,
  compose(applyMiddleware(API)));

export default store;
