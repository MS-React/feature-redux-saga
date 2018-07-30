import { makeActionCreator } from './makeActionCreator';

describe('Action Creator', () => {
  it('should be defined', () => {
    expect(makeActionCreator).toBeDefined();
  });

  it('should be a function', () => {
    expect(makeActionCreator).toEqual(expect.any(Function));
  });
});
