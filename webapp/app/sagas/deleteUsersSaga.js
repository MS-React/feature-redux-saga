import { takeLatest, put, call } from 'redux-saga/effects';
import { USERS } from '../actions/actionTypes';
import {
  deleteUsersSuccess,
  loadingUsersBegin,
  loadingUsersComplete
} from '../actions';
import { deleteUsers } from '../services/userService';
import { getUserId } from '../utils';

// FIXME add async/await support to sagas, to await for all YIELDS completion
// with promises we use promise.resolve ONlY when service responded, with sagas and generators
// it resolves in the initial FORK i.e. not the 3rd yield as required
export function* deleteUsersStart({ user }) {
  yield put(loadingUsersBegin(USERS.LOADING_BEGIN));
  
  // TODO implement error handling
  yield call(deleteUsers, getUserId(user));
  
  yield put(deleteUsersSuccess(user));
  yield put(loadingUsersComplete(USERS.LOADING_COMPLETE));
}

export function* deleteUsersSaga() {
  yield takeLatest(USERS.DELETE_BEGIN, deleteUsersStart);
}
