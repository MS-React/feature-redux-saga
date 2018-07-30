import { put, takeLatest } from 'redux-saga/effects';
import { selectUsersSaga, selectUsersStart } from './selectUsersSaga';
import { selectUserSuccess } from '../actions';

describe('Select Users Saga', () => {
  it('should be defined', () => {
    expect(selectUsersSaga).toBeDefined();
    expect(selectUsersStart).toBeDefined();
  });

  it('should take a select users action', () => {
    const gen = selectUsersSaga();

    expect(gen.next().value).toEqual(
      takeLatest('[users] Select begin', selectUsersStart)
    );
  });

  describe('Selecting a user', () => {
    let selectUsersGen;
    let user;

    beforeAll(() => {
      user = {
        _id: 'fake.id.john',
        name: 'John Doe'
      };
      selectUsersGen = selectUsersStart({ user });
    });

    it('should put the selected user', () => {
      expect(selectUsersGen.next(user).value).toEqual(
        put(selectUserSuccess(user))
      );
    });
  });
});
