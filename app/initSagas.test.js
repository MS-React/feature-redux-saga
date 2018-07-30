import { initSagas } from './initSagas';

describe('initSagas', () => {
  it('should be defined', () => {
    expect(initSagas).toBeDefined();
  });

  it('should be a function', () => {
    expect(initSagas).toEqual(expect.any(Function));
  });
});