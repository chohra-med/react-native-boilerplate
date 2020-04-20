import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ROUTES from './routes';
import Starting from '../views/starting';
import Home from '../views/home';
// eslint-disable-next-line import/no-named-as-default

const App = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <App.Navigator headerMode="none" initialRouteName={ROUTES.STARTING}>
        <App.Screen name={ROUTES.STARTING} component={Starting} />
        <App.Screen name={ROUTES.HOME} component={Home} />
      </App.Navigator>
    </NavigationContainer>
  );
}
