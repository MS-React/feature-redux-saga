import { takeLatest, put } from 'redux-saga/effects';
import { USERS } from '../actions/actionTypes';
import { selectUserSuccess } from '../actions';

export function* selectUsersStart({ user }) {
  yield put(selectUserSuccess(user));
}

export function* selectUsersSaga() {
  yield takeLatest(USERS.SELECT_BEGIN, selectUsersStart);
}
