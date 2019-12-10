import { MapStateContext, MapDispatchContext } from './';

// This will not be permanent
// https://github.com/airbnb/enzyme/issues/1958
describe('creates contexts', () => {
  test('should Be Object', () => {
    expect(MapStateContext).toBeObject();
    expect(MapDispatchContext).toBeObject();
  });
});
