import { getQuery } from './url';

describe('Url Utils', () => {
  describe('getQuery', () => {
    it('should be defined', () => {
      expect(getQuery).toBeDefined();
    });

    it('should be a function', () => {
      expect(getQuery).toEqual(expect.any(Function));
    });

    it('should return the passed in query string as a hashmap', () => {
      expect(getQuery('?foo=&bar=2')).toEqual({
        foo: '',
        bar: '2'
      });
    });

    it('should return an empty object if no params are passed in', () => {
      expect(getQuery(undefined)).toEqual({});
    });
  });
});