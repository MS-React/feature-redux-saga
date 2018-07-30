import { usersLoadingSelector } from './usersLoadingSelector';

describe('Users Loading Selector', () => {
  it('should be defined', () => {
    expect(usersLoadingSelector).toBeDefined();
  });

  it('should be a function', () => {
    expect(usersLoadingSelector).toEqual(expect.any(Function));
  });

  it('should return `true` when loading', () => {
    const state = {
      users: {
        fetch: {
          loading: true
        }
      }
    };

    expect(usersLoadingSelector(state)).toBe(true);
  });

  it('should return `false` when not loading', () => {
    const state = {
      users: {
        fetch: {
          loading: false
        }
      }
    };

    expect(usersLoadingSelector(state)).toBe(false);
  });

  it('should return `false` if `loading` is not defined', () => {
    const state = {
      users: {
        fetch: {}
      }
    };

    expect(usersLoadingSelector(state)).toEqual(false);
  });
});
