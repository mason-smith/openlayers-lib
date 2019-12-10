import { defaultTile } from './defaultTile';

describe('Defaults', () => {
  test('should match', () => {
    expect(defaultTile).toBeObject();
  });
});
