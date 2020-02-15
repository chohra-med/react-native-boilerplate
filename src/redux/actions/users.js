import {GET_USER_LIST} from '../actionTypes';

export const fetchUserListAction = payload => ({
  type: GET_USER_LIST,
  payload,
});
