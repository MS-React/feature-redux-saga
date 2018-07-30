import { takeLatest, put, call } from 'redux-saga/effects';
import { USERS } from '../actions/actionTypes';
import {
  createUsersSuccess,
  loadingUsersBegin,
  loadingUsersComplete
} from '../actions';
import { createUsers } from '../services/userService';

// FIXME add async/await support to sagas, to await for all YIELDS completion
// with promises we use promise.resolve ONlY when service responded, with sagas and generators
// it resolves in the initial FORK i.e. not the 3rd yield as required
export function* createUsersStart({ user }) {
  yield put(loadingUsersBegin(USERS.LOADING_BEGIN));
  
  // TODO implement error handling
  const response = yield call(createUsers, user);
  
  yield put(createUsersSuccess(response.data));
  yield put(loadingUsersComplete(USERS.LOADING_COMPLETE));
}

export function* createUsersSaga() {
  yield takeLatest(USERS.CREATE_BEGIN, createUsersStart);
}
