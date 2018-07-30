import { usersSelector } from './usersSelector';

describe('Users Selector', () => {
  it('should be defined', () => {
    expect(usersSelector).toBeDefined();
  });

  it('should be a function', () => {
    expect(usersSelector).toEqual(expect.any(Function));
  });

  it('should return the users array', () => {
    const state = {
      users: {
        data: [ 'foo', 'bar' ]
      }
    };

    expect(usersSelector(state)).toEqual([ 'foo', 'bar' ]);
  });

  it('should return an empty array if `data` is not defined', () => {
    const state = {
      users: {}
    };

    expect(usersSelector(state)).toEqual([]);
  });
});
