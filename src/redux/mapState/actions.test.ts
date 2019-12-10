// External Dependencies
import Tile from 'ol/layer/Tile';
import Image from 'ol/layer/Image';
import Vector from 'ol/layer/Vector';

// Local Dependencies
import { createMap, createTile, createImage, createVector } from './actions';
import { ACTION_TYPES } from '../ACTION_TYPES';

describe('Map State Actions', () => {
  test('should create an action to create a map', () => {
    const options: object = {};
    const expectedAction = {
      type: ACTION_TYPES.CREATE_MAP,
      payload: options,
    };
    expect(createMap(options)).toEqual(expectedAction);
  });
  test('should create an action to create a tile', () => {
    const tile: Tile = new Tile({});
    const expectedAction = {
      type: ACTION_TYPES.CREATE_TILE,
      payload: tile,
    };
    expect(createTile(tile)).toEqual(expectedAction);
  });
  test('should create an action to create an image', () => {
    const image: Image = new Image({});
    const expectedAction = {
      type: ACTION_TYPES.CREATE_IMAGE,
      payload: image,
    };
    expect(createImage(image)).toEqual(expectedAction);
  });
  test('should create an action to create a tile', () => {
    const vector: Vector = new Vector({});
    const expectedAction = {
      type: ACTION_TYPES.CREATE_VECTOR,
      payload: vector,
    };
    expect(createVector(vector)).toEqual(expectedAction);
  });
});
