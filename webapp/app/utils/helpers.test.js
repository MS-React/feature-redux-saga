import {
  has,
  get,
  isEmpty
} from './helpers';

describe('Helpers', () => {
  describe('has()', () => {
    it('should be defined', () => {
      expect(has).toBeDefined();
    });

    it('should be a function', () => {
      expect(has).toEqual(expect.any(Function));
    });

    it('should return `false` when the passed in object is `null`', () => {
      expect(has(null)).toBe(false);
    });

    it('should return `false` when `key` is not an object prop', () => {
      const source = { foo: '' };
      const key = 'bar'; 

      expect(has(source, key)).toBe(false);
    });

    it('should return `true` when `key` exists as an object prop', () => {
      const source = { foo: '' };
      const key = 'foo'; 

      expect(has(source, key)).toBe(true);
    });
  });

  describe('isEmpty()', () => {
    it('should be defined', () => {
      expect(isEmpty).toBeDefined();
    });

    it('should be a function', () => {
      expect(isEmpty).toEqual(expect.any(Function));
    });

    it('should return `true` when the passed in argument is `null`', () => {
      expect(isEmpty(null)).toBe(true);
    });

    describe('Array', () => {
      it('should return `true` when the array length is 0', () => {
        expect(isEmpty([])).toBe(true);
      });

      it('should return `false` when the array length greater than 0', () => {
        expect(isEmpty([ 'foo', 'bar' ])).toBe(false);
      });
    });
    
    describe('String', () => {
      it('should return `true` when the string length is 0', () => {
        expect(isEmpty('')).toBe(true);
      });

      it('should return `false` when the string length greater than 0', () => {
        expect(isEmpty('foo')).toBe(false);
      });
    });

    describe('Object', () => {
      it('should return `true` when the object is empty', () => {
        expect(isEmpty({})).toBe(true);
      });

      it('should return `false` when the object has props', () => {
        expect(isEmpty({ foo: '' })).toBe(false);
      });
    });

    describe('Invalid values', () => {
      it('should return `true` when the passed in arg is a `Number`', () => {
        expect(isEmpty(1)).toBe(true);
      });

      it('should return `true` when the passed in arg is a `Boolean`', () => {
        expect(isEmpty(false)).toBe(true);
      });
    });
  });

  describe('get()', () => {
    it('should be defined', () => {
      expect(get).toBeDefined();
    });

    it('should be a function', () => {
      expect(get).toEqual(expect.any(Function));
    });

    it('should return `undefined` if the path does not exists', () => {
      const source = {};
      expect(get(source, 'foo')).toBe(undefined);
    });

    it('should return the expected value at `path`', () => {
      const source = { foo: 'value' };
      expect(get(source, 'foo')).toBe('value');
    });

    it('should return `defaultvalue` if `path` value is `undefined`', () => {
      const source = { foo: undefined };
      expect(get(source, 'foo', 'defaultValue')).toBe('defaultValue');
    });
  });
});
