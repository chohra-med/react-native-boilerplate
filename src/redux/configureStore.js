import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

// import promise from 'redux-promise-middleware';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  keyPrefix: 'zones',
  storage: AsyncStorage,
  whitelist: ['users'],
  // blacklist: ['sample'],
  // stateReconciler: autoMergeLevel2,
};

const middlewares = [thunk];

if (IS_DEV) {
  middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(...middlewares),
      // other store enhancers if any
    ),
  );

  const persistor = persistStore(store);

  // persistor.purge();
  return {store, persistor};
};
