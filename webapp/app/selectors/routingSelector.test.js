import { routingSelector } from './routingSelector';

describe('Routing Selector', () => {
  it('should be defined', () => {
    expect(routingSelector).toBeDefined();
  });

  it('should be a function', () => {
    expect(routingSelector).toEqual(expect.any(Function));
  });

  it('should return the routing object', () => {
    const state = {
      routing: {
        location: 'foo'
      }
    };

    expect(routingSelector(state)).toEqual({ location: 'foo' });
  });

  it('should return an empty object if `routing` is not defined', () => {
    const state = {};

    expect(routingSelector(state)).toEqual({});
  });
});
