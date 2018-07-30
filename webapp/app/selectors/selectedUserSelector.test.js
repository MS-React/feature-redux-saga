import { selectedUserSelector } from './selectedUserSelector';

describe('Selected User Selector', () => {
  it('should be defined', () => {
    expect(selectedUserSelector).toBeDefined();
  });

  it('should be a function', () => {
    expect(selectedUserSelector).toEqual(expect.any(Function));
  });

  it('should return the selected user', () => {
    const state = {
      users: {
        selectedUser: 'foo'
      }
    };

    expect(selectedUserSelector(state)).toBe('foo');
  });

  it('should return an empty object if `selectedUser` is not defined', () => {
    const state = {
      users: {}
    };

    expect(selectedUserSelector(state)).toEqual({});
  });
});
