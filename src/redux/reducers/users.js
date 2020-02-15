import _ from 'lodash';
import {GET_USER_LIST} from '../actionTypes';
import initialState from '../initialState';

export default (state = initialState.users, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      return _.mapKeys(action.payload, 'id');
    default:
      return state;
  }
};
