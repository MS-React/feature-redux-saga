import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';
import {
  deleteUsersSaga,
  deleteUsersStart
} from './deleteUsersSaga';
import { deleteUsers } from '../services/userService';

import {
  deleteUsersSuccess,
  loadingUsersBegin,
  loadingUsersComplete
} from '../actions';

describe('Delete Users Saga', () => {
  it('should be defined', () => {
    expect(deleteUsersSaga).toBeDefined();
    expect(deleteUsersStart).toBeDefined();
  });

  it('should take a delete users action', () => {
    const gen = deleteUsersSaga();

    expect(gen.next().value).toEqual(
      takeLatest('[users] Delete begin', deleteUsersStart)
    );
  });

  describe('Deleting a user', () => {
    let deleteUsersGen;
    let user;

    beforeAll(() => {
      user = {
        _id: 'fake.id.john',
        name: 'John Doe'
      };
      deleteUsersGen = deleteUsersStart({ user });
    });

    it('should start loading', () => {
      expect(deleteUsersGen.next().value).toEqual(
        put(loadingUsersBegin('[users] Loading begin'))
      );
    });

    it('should delete the user', () => {
      expect(deleteUsersGen.next({ user }).value).toEqual(
        call(deleteUsers, 'fake.id.john')
      );
    });

    it('should put the deleted user', () => {
      expect(deleteUsersGen.next(user).value).toEqual(
        put(deleteUsersSuccess(user))
      );
    });

    it('should complete loading', () => {
      expect(deleteUsersGen.next().value).toEqual(
        put(loadingUsersComplete('[users] Loading complete'))
      );
    });
  });
});
