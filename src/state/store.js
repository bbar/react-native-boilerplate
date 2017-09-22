import { applyMiddleware, createStore } from 'redux';
import { Map } from 'immutable';
import thunk from 'redux-thunk';
import reducers from './reducer';

const initialState = Map();

const middleware = [
  thunk,
];

export default createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware),
);
