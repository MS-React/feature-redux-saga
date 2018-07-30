import { takeLatest, put, call } from 'redux-saga/effects';
import { USERS } from '../actions/actionTypes';
import {
  updateUsersSuccess,
  loadingUsersBegin,
  loadingUsersComplete
} from '../actions';
import { updateUsers } from '../services/userService';
import { getUserId } from '../utils';

// FIXME add async/await support to sagas, to await for all YIELDS completion
// with promises we use promise.resolve ONlY when service responded, with sagas and generators
// it resolves in the initial FORK i.e. not the 3rd yield as required
export function* updateUsersStart({ user }) {
  yield put(loadingUsersBegin(USERS.LOADING_BEGIN));
  
  // TODO implement error handling
  yield call(updateUsers, getUserId(user), user);
  
  yield put(updateUsersSuccess(user));
  yield put(loadingUsersComplete(USERS.LOADING_COMPLETE));
}

export function* updateUsersSaga() {
  yield takeLatest(USERS.UPDATE_BEGIN, updateUsersStart);
}
