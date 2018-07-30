import {
  getUsers,
  getUsersSuccess,
  deleteUsers,
  deleteUsersSuccess,
  selectUser,
  selectUserSuccess,
  loadingUsersBegin,
  loadingUsersComplete
} from './usersActions';

describe('usersActions', () => {
  describe('getUsers', () => {
    it('should be defined', () => {
      expect(getUsers).toBeDefined();
    });

    it('should be a function', () => {
      expect(getUsers).toEqual(expect.any(Function));
    });

    it('should create an action `[users] Get begin`', () => {
      expect(getUsers()).toEqual({ 
        type: '[users] Get begin'
      });
    });
  });

  describe('getUsersSuccess', () => {
    it('should be defined', () => {
      expect(getUsersSuccess).toBeDefined();
    });

    it('should be a function', () => {
      expect(getUsersSuccess).toEqual(expect.any(Function));
    });

    it('should create an action `[users] Get success`', () => {
      expect(getUsersSuccess()).toEqual({ 
        type: '[users] Get success',
        users: undefined            
      });
    });
  });

  describe('selectUser', () => {
    it('should be defined', () => {
      expect(selectUser).toBeDefined();
    });

    it('should be a function', () => {
      expect(selectUser).toEqual(expect.any(Function));
    });

    it('should create an action `[users] Select begin`', () => {
      expect(selectUser('foo')).toEqual({ 
        type: '[users] Select begin',
        user: 'foo'            
      });
    });
  });

  describe('selectUserSuccess', () => {
    it('should be defined', () => {
      expect(selectUserSuccess).toBeDefined();
    });

    it('should be a function', () => {
      expect(selectUserSuccess).toEqual(expect.any(Function));
    });

    it('should create an action `[users] Select success`', () => {
      expect(selectUserSuccess('foo')).toEqual({ 
        type: '[users] Select success',
        user: 'foo'            
      });
    });
  });

  describe('deleteUsers', () => {
    it('should be defined', () => {
      expect(deleteUsers).toBeDefined();
    });

    it('should be a function', () => {
      expect(deleteUsers).toEqual(expect.any(Function));
    });

    it('should create an action `[users] Delete begin`', () => {
      expect(deleteUsers('foo')).toEqual({ 
        type: '[users] Delete begin',
        user: 'foo'            
      });
    });
  });

  describe('deleteUsersSuccess', () => {
    it('should be defined', () => {
      expect(deleteUsersSuccess).toBeDefined();
    });

    it('should be a function', () => {
      expect(deleteUsersSuccess).toEqual(expect.any(Function));
    });

    it('should create an action `[users] Delete success`', () => {
      expect(deleteUsersSuccess('foo')).toEqual({ 
        type: '[users] Delete success',
        user: 'foo'            
      });
    });
  });

  describe('loadingUsersBegin', () => {
    it('should be defined', () => {
      expect(loadingUsersBegin).toBeDefined();
    });

    it('should be a function', () => {
      expect(loadingUsersBegin).toEqual(expect.any(Function));
    });

    it('should create an action `[users] Loading begin`', () => {
      expect(loadingUsersBegin()).toEqual({ 
        type: '[users] Loading begin'
      });
    });
  });

  describe('loadingUsersComplete', () => {
    it('should be defined', () => {
      expect(loadingUsersComplete).toBeDefined();
    });

    it('should be a function', () => {
      expect(loadingUsersComplete).toEqual(expect.any(Function));
    });

    it('should create an action `[users] Loading complete`', () => {
      expect(loadingUsersComplete()).toEqual({ 
        type: '[users] Loading complete'  
      });
    });
  });
});
