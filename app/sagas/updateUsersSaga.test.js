import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';
import {
  updateUsersSaga,
  updateUsersStart
} from './updateUsersSaga';
import { updateUsers } from '../services/userService';

import {
  updateUsersSuccess,
  loadingUsersBegin,
  loadingUsersComplete
} from '../actions';

describe('Update Users Saga', () => {
  it('should be defined', () => {
    expect(updateUsersSaga).toBeDefined();
    expect(updateUsersStart).toBeDefined();
  });

  it('should take a update users action', () => {
    const gen = updateUsersSaga();

    expect(gen.next().value).toEqual(
      takeLatest('[users] Update begin', updateUsersStart)
    );
  });

  describe('Updating a user', () => {
    let updateUsersGen;
    let user;

    beforeAll(() => {
      user = {
        _id: 'fake.id.john',
        name: 'John Doe'
      };
      updateUsersGen = updateUsersStart({ user });
    });

    it('should start loading', () => {
      expect(updateUsersGen.next().value).toEqual(
        put(loadingUsersBegin('[users] Loading begin'))
      );
    });

    it('should update the user', () => {
      expect(updateUsersGen.next({ user }).value).toEqual(
        call(updateUsers, 'fake.id.john', user)
      );
    });

    it('should put the updated user', () => {
      expect(updateUsersGen.next(user).value).toEqual(
        put(updateUsersSuccess(user))
      );
    });

    it('should complete loading', () => {
      expect(updateUsersGen.next().value).toEqual(
        put(loadingUsersComplete('[users] Loading complete'))
      );
    });
  });
});
