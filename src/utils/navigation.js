import {NavigationState} from 'react-navigation';

export const getActiveRouteState = function(
  route: NavigationState,
): NavigationState {
  if (
    !route.routes ||
    route.routes.length === 0 ||
    route.index >= route.routes.length
  ) {
    return route;
  }

  const childActiveRoute = route.routes[route.index];
  return getActiveRouteState(childActiveRoute);
};
