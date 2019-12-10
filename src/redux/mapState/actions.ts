import { ACTION_TYPES } from '../ACTION_TYPES';
import Tile from 'ol/layer/Tile';
import Image from 'ol/layer/Image';
import Vector from 'ol/layer/Vector';
// import { Image, Tile, Vector } from 'ol/layer';

/**
 * Passes map creation options to reducer function
 * @param {object} options - will be either default options or user-generated options to pass to openlayers Map constructor
 * @returns {object} options
 */
export const createMap = (options: object): object => {
  return {
    type: ACTION_TYPES.CREATE_MAP,
    payload: options,
  };
};

/**
 * Passes tile layer that will be added to map
 * @param {Tile} tile
 */
export const createTile = (tile: Tile) => {
  return {
    type: ACTION_TYPES.CREATE_TILE,
    payload: tile,
  };
};

/**
 * passes Image layer to map
 * @param {Image} image
 */
export const createImage = (image: Image) => {
  return {
    type: ACTION_TYPES.CREATE_IMAGE,
    payload: image,
  };
};

/**
 * passes Vector layer to map
 * @param {Vector} vector
 */
export const createVector = (vector: Vector) => {
  return {
    type: ACTION_TYPES.CREATE_VECTOR,
    payload: vector,
  };
};
