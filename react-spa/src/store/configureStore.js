import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

function configureStore() {
  const enhancers = [applyMiddleware(thunk), composeWithDevTools(applyMiddleware(thunk))];
  return createStore(
    rootReducer,
    compose(...enhancers),
  );
}

export default configureStore;
