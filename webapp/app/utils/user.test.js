import {
  getUserId,
  isUserMatchById,
  isValidUser
} from './user';

describe('User Util', () => {
  describe('getUserId', () => {
    it('should be defined', () => {
      expect(getUserId).toBeDefined();
    });

    it('should be a function', () => {
      expect(getUserId).toEqual(expect.any(Function));
    });

    describe('User id property fallback', () => {
      it('should return `_id` value, if `_id` exists', () => {
        const user = { _id: 'foo'};

        const result = getUserId(user);

        expect(result).toBe('foo');
      });

      it('should return `id` value, when `id` exists and theres no `_id`', () => {
        const user = { id: 'bar' };

        const result = getUserId(user);

        expect(result).toBe('bar');
      });

      it('should return `undefined` if neither `_id` nor `id` exist', () => {
        const user = {};

        const result = getUserId(user);

        expect(result).toBe(undefined);
      });

      it('should return `undefined` if undefined is passed in', () => {
        const result = getUserId(undefined);

        expect(result).toBe(undefined);
      });
    });
  });

  describe('isUserMatchById', () => {
    it('should be defined', () => {
      expect(getUserId).toBeDefined();
    });

    it('should be a function', () => {
      expect(getUserId).toEqual(expect.any(Function));
    });

    it('should return `true` when `id` matches', () => {
      const sourceUser = { id: 'foo' };
      const targetUser = { id: 'foo' };

      const result = isUserMatchById(sourceUser, targetUser);

      expect(result).toBe(true);
    });

    it('should return `false` when `id` does not match', () => {
      const sourceUser = { id: 'foo' };
      const targetUser = { id: 'bar' };

      const result = isUserMatchById(sourceUser, targetUser);

      expect(result).toBe(false);
    });

    it('should return `false` when `sourceUser` is empty', () => {
      const sourceUser = undefined;
      const targetUser = { id: 'bar' };

      const result = isUserMatchById(sourceUser, targetUser);

      expect(result).toBe(false);
    });

    it('should return `false` when `targetUser` is empty', () => {
      const sourceUser = { id: 'foo' };
      const targetUser = undefined;

      const result = isUserMatchById(sourceUser, targetUser);

      expect(result).toBe(false);
    });
  });

  describe('isValidUser', () => {
    it('should be defined', () => {
      expect(getUserId).toBeDefined();
    });

    it('should be a function', () => {
      expect(getUserId).toEqual(expect.any(Function));
    });

    it('should return `true` when `id` exists', () => {
      expect(isValidUser({ id: 'foo' })).toBe(true);
    });

    it('should return `false` when `id` does not exist', () => {
      expect(isValidUser({ bar: '' })).toBe(false);
    });

    it('should return `false` when `id` is empty', () => {
      expect(isValidUser({ id: undefined })).toBe(false);
    });
  });
});
