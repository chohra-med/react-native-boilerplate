import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import ROUTES from './routes';
import Starting from '../views/starting';
import Home from '../views/home';

const App = createSwitchNavigator(
  {
    [ROUTES.STARTING]: {
      screen: Starting,
    },
    [ROUTES.HOME]: {
      screen: Home,
    },
  },
  {
    initialRouteName: ROUTES.STARTING,
  },
);

export default createAppContainer(App);
