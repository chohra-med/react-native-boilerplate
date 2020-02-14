// import {NavigationActions} from 'react-navigation';
import ROUTES from '../../navigation/routes';

export const sections = (navigation, activeRoute) => [
  {
    title: 'Products',
    data: [
      {
        label: 'Add Product',
        icon: {
          name: 'basket',
          type: 'simple-line-icon',
        },
        action: () => {
          console.log('DRAWER CLICKED');
          // navigation.dispatch(
          //   NavigationActions.navigate({
          //     routeName: ROUTES.DISCOVERING,
          //   }),
          // );
        },
        isActive: activeRoute === ROUTES.DISCOVERING,
      },
      {
        label: 'Inactive Product',
        icon: {
          name: 'tag',
          type: 'simple-line-icon',
        },
        action: () => {
          console.log('DRAWER CLICKED');
          // navigation.dispatch(
          //   NavigationActions.navigate({
          //     routeName: ROUTES.DISCOVERING,
          //   }),
          // );
        },
        isActive: activeRoute === ROUTES.DISCOVERING,
      },
      {
        label: 'Active Product',
        icon: {
          name: 'home',
          type: 'simple-line-icon',
        },
        action: () => {
          console.log('DRAWER CLICKED');
          // navigation.dispatch(
          //   NavigationActions.navigate({
          //     routeName: ROUTES.DISCOVERING,
          //   }),
          // );
        },
        isActive: true,
      },
    ],
  },
  {
    title: 'Dealer',
    data: [
      {
        label: 'Account',
        icon: {
          name: 'user',
          type: 'simple-line-icon',
        },
        action: () => {
          console.log('DRAWER CLICKED');
          // navigation.dispatch(
          //   NavigationActions.navigate({
          //     routeName: ROUTES.DISCOVERING,
          //   }),
          // );
        },
        isActive: activeRoute === ROUTES.DISCOVERING,
      },
      {
        label: 'My Card',
        icon: {
          name: 'credit-card',
          type: 'simple-line-icon',
        },
        action: () => {
          console.log('DRAWER CLICKED');
          // navigation.dispatch(
          //   NavigationActions.navigate({
          //     routeName: ROUTES.DISCOVERING,
          //   }),
          // );
        },
        isActive: activeRoute === ROUTES.DISCOVERING,
      },
      {
        label: 'My Plan',
        icon: {
          name: 'doc',
          type: 'simple-line-icon',
        },
        action: () => {
          console.log('DRAWER CLICKED');
          // navigation.dispatch(
          //   NavigationActions.navigate({
          //     routeName: ROUTES.DISCOVERING,
          //   }),
          // );
        },
        isActive: activeRoute === ROUTES.DISCOVERING,
      },
      {
        label: 'Change Language',
        icon: {
          name: 'globe',
          type: 'simple-line-icon',
        },
        action: () => {
          console.log('DRAWER CLICKED');
          // navigation.dispatch(
          //   NavigationActions.navigate({
          //     routeName: ROUTES.DISCOVERING,
          //   }),
          // );
        },
        isActive: activeRoute === ROUTES.DISCOVERING,
      },
    ],
  },
  {
    title: 'User',
    data: [
      {
        label: 'Search Report',
        icon: {
          name: 'magnifier',
          type: 'simple-line-icon',
        },
        action: () => {
          console.log('DRAWER CLICKED');
          // navigation.dispatch(
          //   NavigationActions.navigate({
          //     routeName: ROUTES.DISCOVERING,
          //   }),
          // );
        },
        isActive: activeRoute === ROUTES.DISCOVERING,
      },
      {
        label: 'Scan Barcode',
        icon: {
          name: 'barcode-scan',
          type: 'material-community',
        },
        action: () => {
          console.log('DRAWER CLICKED');
          // navigation.dispatch(
          //   NavigationActions.navigate({
          //     routeName: ROUTES.DISCOVERING,
          //   }),
          // );
        },
        isActive: activeRoute === ROUTES.DISCOVERING,
      },
    ],
  },
];
