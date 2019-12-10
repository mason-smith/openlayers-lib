import { defaultMap } from './defaultMap';

describe('Defaults', () => {
  test('should match', () => {
    expect(defaultMap).toBeObject();
  });
});
