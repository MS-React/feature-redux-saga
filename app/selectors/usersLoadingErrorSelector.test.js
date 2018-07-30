import { usersLoadingErrorSelector } from './usersLoadingErrorSelector';

describe('Users Loading Error Selector', () => {
  it('should be defined', () => {
    expect(usersLoadingErrorSelector).toBeDefined();
  });

  it('should be a function', () => {
    expect(usersLoadingErrorSelector).toEqual(expect.any(Function));
  });

  it('should return the expected `Error`', () => {
    const state = {
      users: {
        fetch: {
          error: Error('foo')
        }
      }
    };

    expect(usersLoadingErrorSelector(state)).toEqual(Error('foo'));
  });

  it('should return `null` if `error` is not defined', () => {
    const state = {
      users: {
        fetch: {}
      }
    };

    expect(usersLoadingErrorSelector(state)).toEqual(null);
  });
});
