import { users } from './';
import initialState from './initialState';

describe('Users Reducer', () => {
  it('should be defined', () => {
    expect(users).toBeDefined();
  });

  it('should be a function', () => {
    expect(users).toEqual(expect.any(Function));
  });

  it('should return the initial state', () => {
    expect(users(undefined, {})).toEqual(initialState.users);
  });

  it('should set loading to `true` ', () => {
    const action = {
      type: '[users] Loading begin'
    };
    const expectedState = {
      ...initialState.users,
      fetch: {
        loading: true,
        error: null
      }
    };

    expect(users(initialState.users, action)).toEqual(expectedState);
  });

  it('should set loading to `false`', () => {
    const action = {
      type: '[users] Loading success'
    };
    const expected = {
      ...initialState.users,
      fetch: {
        loading: false,
        error: null
      }
    };

    expect(users(initialState.users, action)).toEqual(expected);
  });

  it('should set loading to `false` and set error', () => {
    const action = {
      type: '[users] Loading failed',
      error: 'foo'
    };
    const expected = {
      ...initialState.users,
      fetch: {
        loading: false,
        error: 'foo'
      }
    };

    expect(users(initialState.users, action)).toEqual(expected);
  });

  it('should load the fetched users into the store', () => {
    const action = {
      type: '[users] Get success',
      users: [{
        name: 'John Doe'
      }]
    };
    const expected = {
      ...initialState.users,
      data: [{
        name: 'John Doe'
      }]
    };

    expect(users(initialState.users, action)).toEqual(expected);
  });

  it('should set the selected user in the store', () => {
    const action = {
      type: '[users] Select success',
      user: {
        name: 'John Doe'
      }
    };
    const expected = {
      ...initialState.users,
      selectedUser: {
        name: 'John Doe'
      }
    };

    expect(users(initialState.users, action)).toEqual(expected);
  });

  it('should delete the given user from the store', () => {
    const action = {
      type: '[users] Delete success',
      user: {
        _id: 'fake.id.joe',
        name: 'John Doe' 
      }
    };
    const expectedState = {
      ...initialState.users,
      data: [{
        _id: 'fake.id.jane',
        name: 'Jane Doe' 
      }],
    };

    const state = users(
      {
        ...initialState.users,
        data: [
          {
            _id: 'fake.id.joe',
            name: 'John Doe' 
          },
          {
            _id: 'fake.id.jane',
            name: 'Jane Doe' 
          }
        ],
      },
      action
    );
    
    expect(state).toEqual(expectedState);
  });

  it('should add the created user into the store', () => {
    const action = {
      type: '[users] Create success',
      user: {
        name: 'John Doe' 
      }
    };
    const expectedState = {
      ...initialState.users,
      data: [
        {
          name: 'John Doe' 
        },
        {
          name: 'Jane Doe' 
        }
      ]
    };

    const state = users(
      {
        ...initialState.users,
        data: [
          {
            name: 'Jane Doe' 
          }
        ],
      },
      action
    );

    expect(state).toEqual(expectedState);
  });

  it('should update the modified user in the store', () => {
    const action = {
      type: '[users] Update success',
      user: {
        _id: 'fake.id.john',
        name: 'John Doe Jr.'
      }
    };
    const expectedState = {
      ...initialState.users,
      data: [
        {
          _id: 'fake.id.john',
          name: 'John Doe Jr.' 
        },
        {
          _id: 'fake.id.jane',
          name: 'Jane Doe' 
        }
      ]
    };

    const state = users(
      {
        ...initialState.users,
        data: [
          {
            _id: 'fake.id.john',
            name: 'John Doe' 
          },
          {
            _id: 'fake.id.jane',
            name: 'Jane Doe' 
          }
        ],
      },
      action
    );

    expect(state).toEqual(expectedState);
  });
});
