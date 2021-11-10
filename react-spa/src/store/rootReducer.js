import { combineReducers } from 'redux';
import currencyReducer from './currency/reducers/reducer';

const rootReducer = combineReducers({
  currency: currencyReducer,
});

export default rootReducer;
