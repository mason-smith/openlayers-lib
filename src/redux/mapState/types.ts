import { Image, Tile, Vector } from 'ol/layer';

export type MapState = {
  mapOptions: object;
  tiles: Tile[];
  images: Image[];
  vectors: Vector[];
};
