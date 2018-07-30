import { takeLatest, put, call } from 'redux-saga/effects';
import { DEFAULT_PAGINATION_QUERY } from '../constants';
import { USERS } from '../actions/actionTypes';
import {
  getUsersSuccess,
  loadingUsersBegin,
  loadingUsersComplete
} from '../actions';

import { fetchUsers } from '../services/userService';

// TODO implement failure
export function* getUsersStart({ queryParams = DEFAULT_PAGINATION_QUERY }) {
  yield put(loadingUsersBegin(USERS.LOADING_BEGIN));
  const response = yield call(fetchUsers, queryParams);
  yield put(getUsersSuccess(response.data.docs));
  yield put(loadingUsersComplete(USERS.LOADING_COMPLETE));
}

export function* getUsersSaga() {
  yield takeLatest(USERS.GET_BEGIN, getUsersStart);
}
