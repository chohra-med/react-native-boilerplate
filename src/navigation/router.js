import ROUTES from './routes';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Welcome from '../views/welcome';
import Login from '../views/login';
import SignUp from '../views/signup';
import LoginPhone from '../views/login_phone';
import LoginCode from '../views/login_code';
import Home from '../views/home';
import Category from '../views/category';
import SubCategory from '../views/sub_category';
import Shop from '../views/shop';
import Product from '../views/product';
import Notifications from '../views/notifications';

import SideBar from './sidebar';

const Auth = createStackNavigator(
  {
    [ROUTES.LOGIN]: {
      screen: Login,
    },
    [ROUTES.SIGN_UP]: {
      screen: SignUp,
    },
  },
  {
    initialRouteName: ROUTES.LOGIN,
    headerMode: 'none',
    header: null,
  },
);

const TwoFactorAuth = createStackNavigator(
  {
    [ROUTES.LOGIN_PHONE]: {
      screen: LoginPhone,
    },
    [ROUTES.LOGIN_CODE]: {
      screen: LoginCode,
    },
  },
  {
    initialRouteName: ROUTES.LOGIN_PHONE,
    headerMode: 'none',
    header: null,
  },
);

const Discovering = createStackNavigator(
  {
    [ROUTES.HOME]: {
      screen: Home,
    },
    [ROUTES.CATEGORY]: {
      screen: Category,
    },
    [ROUTES.SUBCATEGORY]: {
      screen: SubCategory,
    },
    [ROUTES.SHOP]: {
      screen: Shop,
    },
    [ROUTES.PRODUCT]: {
      screen: Product,
    },
    [ROUTES.NOTIFICATIONS]: {
      screen: Notifications,
    },
  },
  {
    initialRouteName: ROUTES.HOME,
    headerMode: 'none',
    header: null,
  },
);

const AppInside = createDrawerNavigator(
  {
    [ROUTES.DISCOVERING]: {
      screen: Discovering,
    },
  },
  {
    initialRouteName: ROUTES.DISCOVERING,
    contentComponent: SideBar,
    headerMode: 'none',
    header: null,
    // cardStyle: {backgroundColor: '#fff'},
  },
);

const App = createSwitchNavigator(
  {
    [ROUTES.WELCOME]: {
      screen: Welcome,
    },
    [ROUTES.AUTH]: {
      screen: Auth,
    },
    [ROUTES.TWO_FACTOR_AUTH]: {
      screen: TwoFactorAuth,
    },
    [ROUTES.APP_INSIDE]: {
      screen: AppInside,
    },
  },
  {
    initialRouteName: ROUTES.WELCOME,
  },
);

export default createAppContainer(App);
