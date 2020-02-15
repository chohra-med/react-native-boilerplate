import axios from 'axios';
import {API} from '../service/api_constants';
import {fetchUserListAction} from '../actions/users';
import categories from '../../assets/data/categories';

export const fetchUserList = data => dispatch =>
  dispatch(fetchUserListAction(categories));
