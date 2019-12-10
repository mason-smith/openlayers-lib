import { MapState } from './types';
import { ACTION_TYPES } from '../ACTION_TYPES';

/**
 * initializes the mapState
 */
export const initialMapState: MapState = {
  mapOptions: {},
  tiles: [],
  images: [],
  vectors: [],
};

/**
 * reducer to update map state, called automatically by dispatch
 * @param {object} state - existing state
 * @param {string} type - The type property of the action
 * @param {any} payload - the payload being sent from action
 * @return {object} new state
 */
export default (state: MapState = initialMapState, { type, payload }: any) => {
  switch (type) {
    case ACTION_TYPES.CREATE_MAP:
      return { ...state, mapOptions: payload };
    case ACTION_TYPES.CREATE_TILE:
      return { ...state, tiles: [...state.tiles, payload] };
    case ACTION_TYPES.CREATE_IMAGE:
      return { ...state, images: [...state.images, payload] };
    case ACTION_TYPES.CREATE_VECTOR:
      return { ...state, vectors: [...state.vectors, payload] };
    default:
      return state;
  }
};
