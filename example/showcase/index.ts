// External Deps
import { defaults as defaultControls } from 'ol/control';
import { defaults } from 'ol/interaction';
import View from 'ol/View';
import ImageWMS from 'ol/source/ImageWMS';
import XYZ from 'ol/source/XYZ';

// Local Deps

const pat =
  'pk.eyJ1IjoiYWFyb25ib3dtYW4iLCJhIjoiY2syZXRydzk0MGQydjNjbzBzZWk1ZnByOCJ9.NYAVeO7010_rYKHmUP6_Wg';

const medview = new View({
  projection: 'EPSG:4326', // OPTIONS - 3857 or 4326
  center: [0, 0],
  zoom: 0,
});

export const defaultMapOptions = {
  layers: [],
  target: 'map',
  view: medview,
  loadTilesWhileInteracting: true,
  controls: defaultControls({
    zoom: true,
    attribution: false,
    rotate: false,
    zoomOptions: { delta: 1 },
  }),
  interactions: defaults({
    altShiftDragRotate: false,
    keyboard: false,
    zoomDelta: 1,
  }),
};

export const defaultBaseMapOptions = {
  visible: true,
  preload: Infinity,
  source: new XYZ({
    url: `https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=${pat}`,
  }),
};

export const defaultSeaMapOptions = {
  source: new XYZ({
    url: 'http://t1.openseamap.org/seamark/{z}/{x}/{y}.png',
  }),
};
