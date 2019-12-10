// Local Deps
import { ACTION_TYPES } from '../ACTION_TYPES';
import mapReducer, { initialMapState } from './reducer';

const mockInitialMapState = {
  mapOptions: {},
  tiles: [],
  images: [],
  vectors: [],
};

describe('mapState reducer', () => {
  test('initialMapState should be an object', () => {
    expect(initialMapState).toBeObject();
  });

  test('should return the initial state', () => {
    // @ts-ignore
    expect(mapReducer(undefined, {})).toEqual(mockInitialMapState);
  });
  describe('CREATE_MAP', () => {
    test('should handle CREATE_MAP', () => {
      expect(
        mapReducer(
          // @ts-ignore
          {},
          {
            type: ACTION_TYPES.CREATE_MAP,
            payload: {},
          },
        ),
      ).toEqual({
        mapOptions: {},
      });
    });
  });
  describe('CREATE_TILE', () => {
    test('should handle CREATE_TILE', () => {
      expect(
        // @ts-ignore
        mapReducer(mockInitialMapState, {
          type: ACTION_TYPES.CREATE_TILE,
          payload: {},
        }),
      ).toEqual({
        ...mockInitialMapState,
        tiles: [...mockInitialMapState.tiles, {}],
      });
    });
  });
  describe('CREATE_IMAGE', () => {
    test('should handle CREATE_IMAGE', () => {
      expect(
        // @ts-ignore
        mapReducer(mockInitialMapState, {
          type: ACTION_TYPES.CREATE_IMAGE,
          payload: {},
        }),
      ).toEqual({
        ...mockInitialMapState,
        images: [...mockInitialMapState.images, {}],
      });
    });
  });
  describe('CREATE_VECTOR', () => {
    test('should handle CREATE_VECTOR', () => {
      expect(
        // @ts-ignore
        mapReducer(mockInitialMapState, {
          type: ACTION_TYPES.CREATE_VECTOR,
          payload: {},
        }),
      ).toEqual({
        ...mockInitialMapState,
        vectors: [...mockInitialMapState.vectors, {}],
      });
    });
  });
});
