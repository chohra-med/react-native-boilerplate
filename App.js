import 'react-native-gesture-handler';
import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Router from './src/navigation/router';
import configureStore from './src/redux/configureStore';

const {persistor, store} = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
);

export default App;
